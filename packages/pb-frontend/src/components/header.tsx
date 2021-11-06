import { css } from "@emotion/react"

const container = css`
  background-color: #fff;
  padding: 2rem 0;
  border-bottom: #bdbdbd 1px solid;
  position: fixed;
  top: 0;
  width: 100%;
`

export const Header = () => {
  return (
    <header css={container}>
      <p>header</p>
    </header>
  )
}
