import { Component, ReactNode } from 'react';
import ErrorMessage from './ErrorMessage';

interface ErrorProps {
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          <>
            <h2>Something went wrong</h2>
            <ErrorMessage />
          </>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
export default ErrorBoundary;
