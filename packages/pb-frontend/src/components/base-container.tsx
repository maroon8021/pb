import { css } from "@emotion/react"
import { FC } from "react"

const container = css`
  margin-top: 6rem;
`

export const BaseContainer: FC = ({ children }) => {
  return <div css={container}>{children}</div>
}
