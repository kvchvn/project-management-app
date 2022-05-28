import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import StyledButton from '../../styles/components/StyledButton';
import { StyledError } from './styles';

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
          <StyledError>
            <h2>Sorry, something went wrong</h2>
            <Link to={routerPaths.main}>
              <StyledButton variant="primary">Go to Main page</StyledButton>
            </Link>
          </StyledError>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
export default ErrorBoundary;
