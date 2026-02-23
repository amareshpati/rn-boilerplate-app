// src/services/storage/index.ts

import { createMMKV } from 'react-native-mmkv'

// Create a single global instance
export const storage = createMMKV({
    id: 'app-storage',
})

/**
 * Generic Setters
 */
export const setString = (key: string, value: string) => {
    storage.set(key, value)
}

export const setNumber = (key: string, value: number) => {
    storage.set(key, value)
}

export const setBoolean = (key: string, value: boolean) => {
    storage.set(key, value)
}

export const setObject = <T extends object>(key: string, value: T) => {
    storage.set(key, JSON.stringify(value))
}

/**
 * Generic Getters
 */
export const getString = (key: string) => {
    return storage.getString(key)
}

export const getNumber = (key: string) => {
    return storage.getNumber(key)
}

export const getBoolean = (key: string) => {
    return storage.getBoolean(key)
}

export const getObject = <T extends object>(key: string): T | undefined => {
    const raw = storage.getString(key)
    if (!raw) return undefined
    try {
        return JSON.parse(raw) as T
    } catch {
        return undefined
    }
}

/**
 * Remove key
 */
export const removeItem = (key: string) => {
    storage.remove(key)
}

/**
 * Clear all storage
 */
export const clearStorage = () => {
    storage.clearAll()
}