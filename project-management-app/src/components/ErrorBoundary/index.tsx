import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import StyledButton from '../../styles/components/StyledButton';
import { StyledError } from './styles';
import { TFunction, withTranslation } from 'react-i18next';

interface ErrorProps {
  t: TFunction;
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = {
      hasError: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.location.replace('/');
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          <StyledError>
            <h2>{this.props.t('errorBoundary.title')}</h2>
            <Link to={routerPaths.main}>
              <StyledButton variant="primary">{this.props.t('errorBoundary.toMain')}</StyledButton>
            </Link>
          </StyledError>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
export default withTranslation()(ErrorBoundary);
