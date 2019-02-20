/* eslint react/prop-types: 0 */
import React from 'react'

import website from '../config/website'

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <html lang={website.siteLanguage} dir={website.dir} {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {headComponents}
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, maximum-scale=5.0, initial-scale=1.0"
      />
      <link rel="author" href="/humans.txt" type="text/plain" />
      <link
        rel="preload"
        href="/fonts/topaz.woff2"
        as="font"
        crossOrigin="anonymous"
      />
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
)

export default HTML
