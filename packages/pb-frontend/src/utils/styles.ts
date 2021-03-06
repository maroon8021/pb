import { css } from "@emotion/react"

const resetBase = css`
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    background: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
  body {
    line-height: 1;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  nav ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: "";
    content: none;
  }
  a {
    background: transparent;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  /* change colours to suit your needs */
  ins {
    background-color: #ff9;
    color: #000;
    text-decoration: none;
  }
  /* change colours to suit your needs */
  mark {
    background-color: #ff9;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }
  del {
    text-decoration: line-through;
  }
  abbr[title],
  dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* change border colour to suit your needs */
  hr {
    border: 0;
    border-top: 1px solid #ccc;
    display: block;
    height: 1px;
    margin: 1em 0;
    padding: 0;
  }
  input,
  select {
    vertical-align: middle;
  }
`

const boxSizingExtend = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`

const rem = css`
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.4em;
  }
`

const textDecoration = css`
  a {
    text-decoration: none;
  }
`

const removeButtonStyle = css`
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
`

export const reset = css`
  ${resetBase}
  ${boxSizingExtend}
  ${rem}
  ${textDecoration}
  ${removeButtonStyle}
`
