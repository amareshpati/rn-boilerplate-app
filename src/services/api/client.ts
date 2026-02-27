// src/services/api/client.ts

import { getString } from '@/storage';
import { STORAGE_KEYS } from '@/storage';
import { ENV } from '@/config';

// ─── Request Options ──────────────────────────────────────────────────────────

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestOptions {
    method?: HttpMethod;
    body?: Record<string, unknown>;
    headers?: Record<string, string>;
    authenticated?: boolean;
}

// ─── API Error ────────────────────────────────────────────────────────────────

export class ApiError extends Error {
    constructor(
        public statusCode: number,
        message: string,
        public data?: unknown,
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

// ─── Core Request Function ────────────────────────────────────────────────────

async function request<T>(
    endpoint: string,
    options: RequestOptions = {},
): Promise<T> {
    const {
        method = 'GET',
        body,
        headers = {},
        authenticated = true,
    } = options;

    // Build headers
    const requestHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
    };

    // Attach token if authenticated
    if (authenticated) {
        const token = getString(STORAGE_KEYS.AUTH_TOKEN);
        if (token) {
            requestHeaders.Authorization = `Bearer ${token}`;
        }
    }

    const response = await fetch(`${ENV.API_BASE_URL}${endpoint}`, {
        method,
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
    });

    // Parse JSON regardless (error bodies are often JSON too)
    let data: unknown;
    try {
        data = await response.json();
    } catch {
        data = null;
    }

    if (!response.ok) {
        throw new ApiError(
            response.status,
            (data as { message?: string })?.message ?? response.statusText,
            data,
        );
    }

    return data as T;
}

// ─── Convenience Methods ──────────────────────────────────────────────────────

export const apiClient = {
    get: <T>(endpoint: string, options?: Omit<RequestOptions, 'method' | 'body'>) =>
        request<T>(endpoint, { ...options, method: 'GET' }),

    post: <T>(endpoint: string, body?: Record<string, unknown>, options?: Omit<RequestOptions, 'method' | 'body'>) =>
        request<T>(endpoint, { ...options, method: 'POST', body }),

    put: <T>(endpoint: string, body?: Record<string, unknown>, options?: Omit<RequestOptions, 'method' | 'body'>) =>
        request<T>(endpoint, { ...options, method: 'PUT', body }),

    patch: <T>(endpoint: string, body?: Record<string, unknown>, options?: Omit<RequestOptions, 'method' | 'body'>) =>
        request<T>(endpoint, { ...options, method: 'PATCH', body }),

    delete: <T>(endpoint: string, options?: Omit<RequestOptions, 'method' | 'body'>) =>
        request<T>(endpoint, { ...options, method: 'DELETE' }),
};
