/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import ReactDOM from "react-dom"
import AppProvider from "./src/context"
import { loadableReady } from "@loadable/component"

export const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    loadableReady(() => {
      ReactDOM.render(element, container, callback)
    })
  }
}

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)
