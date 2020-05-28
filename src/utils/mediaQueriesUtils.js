import { css } from "styled-components"
import { createMedia } from "@artsy/fresnel"

const breakpoints = {
  xs: 360,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1369,
}

const QueryBreakpoints = createMedia({
  breakpoints,
})

const mediaQuery = (...query) => (...rules) => css`
  @media ${css(...query)} {
    ${css(...rules)};
  }
`

// Generate CSS to be injected into the head
export const mediaStyles = QueryBreakpoints.createMediaStyle()
export const { Media, MediaContextProvider } = QueryBreakpoints

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
const StyledComponentMedia = {
  handheld: mediaQuery`(min-width: ${(breakpoints.xs + 1) / 16}em)`,
  phablet: mediaQuery`(min-width: ${breakpoints.sm / 16}em)`,
  tablet: mediaQuery`(min-width: ${breakpoints.md / 16}em)`,
  desktop: mediaQuery`(min-width: ${breakpoints.lg / 16}em)`,
  giant: mediaQuery`(min-width: ${breakpoints.xl / 16}em)`,
  minWidth: pxValue => mediaQuery`(min-width: ${pxValue / 16}em)`,
  print: mediaQuery`print`,
}

export default StyledComponentMedia
