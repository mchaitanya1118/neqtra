import { Edge, Node } from "@xyflow/react";

export interface ExecutionResult {
    nodeId: string;
    output: any;
    status: 'success' | 'error';
    error?: string;
    duration: number;
}

export async function executeWorkflow(nodes: Node[], edges: Edge[]): Promise<ExecutionResult[]> {
    const results: ExecutionResult[] = [];
    const executionData: Record<string, any> = {};

    // 1. Build Adjacency List
    const adjacencyList: Record<string, string[]> = {};
    const inDegree: Record<string, number> = {};

    nodes.forEach(node => {
        adjacencyList[node.id] = [];
        inDegree[node.id] = 0;
    });

    edges.forEach(edge => {
        adjacencyList[edge.source].push(edge.target);
        inDegree[edge.target] = (inDegree[edge.target] || 0) + 1;
    });

    // 2. Find Start Nodes (Trigger)
    // For this simple engine, we treat any node with in-degree 0 as a start node
    const queue: string[] = nodes.filter(n => inDegree[n.id] === 0).map(n => n.id);

    // 3. Execution Loop (BFS-like)
    while (queue.length > 0) {
        const nodeId = queue.shift()!;
        const node = nodes.find(n => n.id === nodeId);

        if (!node) continue;

        // Get Inputs from previous nodes
        // (Simplified: In a real n8n, inputs are an array of items. Here we just merge previous outputs)
        const incomingEdges = edges.filter(e => e.target === nodeId);
        const inputs = incomingEdges.map(e => executionData[e.source]).filter(Boolean);
        const inputData = inputs.length > 0 ? inputs[0] : {}; // Take first input for simplicity

        const startTime = performance.now();
        let output = {};
        let status: 'success' | 'error' = 'success';
        let error: string | undefined;

        try {
            output = await executeNode(node, inputData);
        } catch (e: any) {
            status = 'error';
            error = e.message;
            console.error(`Error executing node ${nodeId}:`, e);
        }

        const duration = performance.now() - startTime;
        executionData[nodeId] = output;

        results.push({
            nodeId,
            output,
            status,
            error,
            duration
        });

        // Add neighbors to queue if we assume they are ready
        // (Real topo sort would decrement in-degree, but this is a simple flow)
        if (status === 'success') {
            adjacencyList[nodeId].forEach(neighborId => {
                queue.push(neighborId);
            });
        }
    }

    return results;
}

async function executeNode(node: Node, input: any): Promise<any> {
    const { type, data } = node;

    switch (type) {
        case 'webhook':
            return {
                body: { message: "Webhook triggered manually" },
                query: {},
                method: data.method || 'GET'
            };

        case 'http-request':
            if (!data.url) throw new Error("URL is required");
            const response = await fetch(String(data.url), {
                method: String(data.method || 'GET'),
                headers: (data.headers as Record<string, string>) || {},
                body: data.method !== 'GET' ? String(data.body || '') : undefined
            });
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return await response.json();
            }
            return await response.text();

        case 'llm':
            // Mock LLM call
            await new Promise(resolve => setTimeout(resolve, 1000));
            return {
                content: `AI Generated response for: "${data.prompt}" using ${data.model}`,
                usage: { prompt_tokens: 10, completion_tokens: 20 }
            };

        case 'code':
            try {
                // EXTREMELY UNSAFE - Demo purposes only
                // Allows 'input' variable to be used
                // eslint-disable-next-line
                const func = new Function('input', data.code as string || 'return input;');
                return func(input);
            } catch (e) {
                throw new Error("Code execution failed: " + e);
            }

        default:
            return input;
    }
}
