import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (this.state.hasError === true) {
            return this.state.hasError;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null && prevState.hasError === true) {
            if (this.state.hasError === true) {
                this.setState({
                    hasError: false
                })
            }
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error,
            errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return <div>Something went wrong.</div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;