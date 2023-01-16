import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string
    fg: string
    fontFamily: {
      default: string
      secondary: string
    }
  }
}
