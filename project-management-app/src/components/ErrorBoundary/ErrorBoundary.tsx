import { Component, ErrorInfo, ReactNode } from "react";
import ErrorMessage from './ErrorMessage';


interface ErrorProps {
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  state = {
    hasError: false
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Something went wrong</h2>
          <ErrorMessage />
        </>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

