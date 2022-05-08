import 'styled-components';
import { Theme } from './interfaces/common';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
