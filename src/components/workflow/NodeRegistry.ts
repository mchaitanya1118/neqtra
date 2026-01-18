import { LucideIcon, Webhook, Globe, Bot, Terminal, FileSpreadsheet, Play, Send, Zap, Calendar, Radio, FileText, ArrowRight, MessageSquare, MousePointerClick } from "lucide-react";

export interface NodeType {
    type: string;
    label: string;
    icon: LucideIcon;
    description: string;
    category: 'trigger' | 'action';
    defaultData: Record<string, any>;
}

export const NODE_TYPES: Record<string, NodeType> = {
    'manual': {
        type: 'manual',
        label: 'Trigger manually',
        icon: MousePointerClick,
        description: 'Runs the flow on clicking a button',
        category: 'trigger',
        defaultData: {}
    },
    'app-event': {
        type: 'app-event',
        label: 'On app event',
        icon: Radio,
        description: 'Runs the flow when something happens in an app',
        category: 'trigger',
        defaultData: {}
    },
    'schedule': {
        type: 'schedule',
        label: 'On a schedule',
        icon: Calendar,
        description: 'Runs the flow every day, hour, or custom interval',
        category: 'trigger',
        defaultData: {
            interval: '0 0 * * *'
        }
    },
    'webhook': {
        type: 'webhook',
        label: 'On webhook call',
        icon: Webhook,
        description: 'Runs the flow on receiving an HTTP request',
        category: 'trigger',
        defaultData: {
            method: 'GET',
            path: '/webhook/test'
        }
    },
    'form-submission': {
        type: 'form-submission',
        label: 'On form submission',
        icon: FileText,
        description: 'Generate webforms and pass responses to workflow',
        category: 'trigger',
        defaultData: {}
    },
    'execute-workflow': {
        type: 'execute-workflow',
        label: 'When executed by another workflow',
        icon: ArrowRight,
        description: 'Runs the flow when called by another workflow',
        category: 'trigger',
        defaultData: {}
    },
    'chat-message': {
        type: 'chat-message',
        label: 'On chat message',
        icon: MessageSquare,
        description: 'Runs the flow when a user sends a chat message',
        category: 'trigger',
        defaultData: {}
    },
    'http-request': {
        type: 'http-request',
        label: 'HTTP Request',
        icon: Globe,
        description: 'Make an API call',
        category: 'action',
        defaultData: {
            method: 'GET',
            url: 'https://api.example.com',
            headers: [],
            body: ''
        }
    },
    'llm': {
        type: 'llm',
        label: 'LLM Chat',
        icon: Bot,
        description: 'Generate text using AI',
        category: 'action',
        defaultData: {
            model: 'gpt-4o',
            systemPrompt: 'You are a helpful assistant.',
            prompt: ''
        }
    },
    'code': {
        type: 'code',
        label: 'Code',
        icon: Terminal,
        description: 'Run custom JavaScript',
        category: 'action',
        defaultData: {
            code: 'return input;'
        }
    },
    'google-sheets': {
        type: 'google-sheets',
        label: 'Google Sheets',
        icon: FileSpreadsheet,
        description: 'Read/Write to Sheets',
        category: 'action',
        defaultData: {
            operation: 'read',
            sheetId: ''
        }
    }
};

export const REGISTERED_NODES = Object.values(NODE_TYPES);
