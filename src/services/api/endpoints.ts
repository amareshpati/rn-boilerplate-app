// src/services/api/endpoints.ts

export const ENDPOINTS = {
    // ── Posts ─────────────────────────────────────────────────────────────────
    POSTS: {
        LIST: '/posts',
        DETAIL: (id: number) => `/posts/${id}`,
        ADD: '/posts/add',
        UPDATE: (id: number) => `/posts/${id}`,
        DELETE: (id: number) => `/posts/${id}`,
        SEARCH: '/posts/search',
    },

    // ── Users ─────────────────────────────────────────────────────────────────
    USERS: {
        LIST: '/users',
        DETAIL: (id: number) => `/users/${id}`,
    },
} as const;
