import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    dark: boolean;
    main: string;
    shade: string;
    text: string;
    title: string;
  }
}