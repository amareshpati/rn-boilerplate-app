import React, { Component, ReactNode } from 'react';
import { FallbackView } from './FallbackView';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
    onError?: (error: Error, info: React.ErrorInfo) => void;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            hasError: false,
            error: undefined,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.log('ErrorBoundary caught:', error, info);

        if (this.props.onError) {
            this.props.onError(error, info);
        }
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: undefined,
        });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <FallbackView
                    error={this.state.error}
                    onRetry={this.handleReset}
                />
            );
        }

        return this.props.children;
    }
}