// src/hooks/useApi.ts

import { useCallback, useState } from 'react';
import { ApiError } from '@/services/api/client';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ApiState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * A minimal hook to wrap any async API call with loading / error / data state.
 *
 * @example
 * const { data, loading, error, execute } = useApi(authApi.login);
 * await execute({ email, password });
 */
export function useApi<TArgs extends unknown[], TResult>(
    apiFn: (...args: TArgs) => Promise<TResult>,
) {
    const [state, setState] = useState<ApiState<TResult>>({
        data: null,
        loading: false,
        error: null,
    });

    const execute = useCallback(
        async (...args: TArgs): Promise<TResult | null> => {
            setState({ data: null, loading: true, error: null });
            try {
                const result = await apiFn(...args);
                setState({ data: result, loading: false, error: null });
                return result;
            } catch (err) {
                const message =
                    err instanceof ApiError
                        ? err.message
                        : 'An unexpected error occurred.';
                setState({ data: null, loading: false, error: message });
                return null;
            }
        },
        [apiFn],
    );

    const reset = useCallback(() => {
        setState({ data: null, loading: false, error: null });
    }, []);

    return { ...state, execute, reset };
}
