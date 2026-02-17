import React from 'react';
import {
    FlatList,
    FlatListProps,
} from 'react-native';

export function AppFlatList<T>(props: FlatListProps<T>) {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            {...props}
        />
    );
}