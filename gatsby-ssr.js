/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import * as React from "react"
import { MediaContextProvider } from "./src/utils/MediaQueriesUtils"

export const wrapRootElement = ({ element }) => ({ element })
