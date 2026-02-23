// src/services/api/modules/posts.ts
// Uses DummyJSON — https://dummyjson.com/docs/posts

import { apiClient } from '../client';
import { ENDPOINTS } from '../endpoints';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number;
}

export interface PostsResponse {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
}

export interface AddPostPayload {
    title: string;
    body: string;
    userId?: number;
    tags?: string[];
}

// ─── API Calls ────────────────────────────────────────────────────────────────

export const postsApi = {
    /** GET /posts — fetch paginated list */
    getAll: (limit = 10, skip = 0) =>
        apiClient.get<PostsResponse>(
            `${ENDPOINTS.POSTS.LIST}?limit=${limit}&skip=${skip}`,
            { authenticated: false },
        ),

    /** GET /posts/:id — fetch a single post */
    getById: (id: number) =>
        apiClient.get<Post>(
            ENDPOINTS.POSTS.DETAIL(id),
            { authenticated: false },
        ),

    /** POST /posts/add — create a new post (DummyJSON simulates it) */
    add: (payload: AddPostPayload) =>
        apiClient.post<Post>(
            ENDPOINTS.POSTS.ADD,
            payload as unknown as Record<string, unknown>,
            { authenticated: false },
        ),

    /** GET /posts/search?q= — search posts */
    search: (query: string) =>
        apiClient.get<PostsResponse>(
            `${ENDPOINTS.POSTS.SEARCH}?q=${encodeURIComponent(query)}`,
            { authenticated: false },
        ),
};
