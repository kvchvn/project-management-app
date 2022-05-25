import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
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
            <Link to={`/${routerPaths.main}`}>
              <h3>Go to Main page</h3>
            </Link>
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
