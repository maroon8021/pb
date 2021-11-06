import { css } from "@emotion/react"
import { ChangeEvent, FormEvent, useCallback, useMemo } from "react"

const container = css`
  width: 40rem;
  margin: 15rem auto 0;
  padding: 3rem;
  border: #bdbdbd 1px solid;
  border-radius: 3px;
  background-color: #fff;
`

const labelContainer = css`
  padding-bottom: 0.8rem;
`
const inputContainer = css`
  padding-bottom: 1.6rem;
`

const loginLabel = css`
  font-size: 1.8rem;
`

const loginInput = css`
  font-size: 1.8rem;
  width: 100%;
  padding: 0.4rem 0.8rem;
`

const loginButtonBase = css`
  font-size: 1.8rem;
  margin-top: 1.6rem;
  color: #fff;
  border-radius: 3px;
  transition: 0.3s;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
`

const loginButton = css`
  ${loginButtonBase}
  background-color: #03a9f4;

  opacity: 0.6;
  &:focus,
  &:hover {
    opacity: 1;
  }
`

const disabledLoginButton = css`
  ${loginButtonBase}
  &:disabled {
    background-color: #e0e0e0;
  }
`

const errorMessage = css`
  font-size: 1.8rem;
  margin-top: 1.6rem;
  color: #d32f2f;
  text-align: center;
  font-weight: bold;
`

type LoginProps = {
  email: string
  password: string
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent) => void
  loading: boolean
  hasError: boolean
}

export const Login = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onSubmit,
  loading,
  hasError,
}: LoginProps) => {
  const isDisabled = useMemo(
    () => !email || !password || loading,
    [email, password, loading]
  )
  return (
    <form css={container} onSubmit={onSubmit}>
      <div>
        <div css={labelContainer}>
          <label css={loginLabel}>Email</label>
        </div>
        <div css={inputContainer}>
          <input
            css={loginInput}
            defaultValue={email}
            onChange={onChangeEmail}
            type="text"
          />
        </div>
      </div>
      <div>
        <div css={labelContainer}>
          <label css={loginLabel}>Password</label>
        </div>
        <div css={inputContainer}>
          <input
            css={loginInput}
            defaultValue={password}
            onChange={onChangePassword}
            type="password"
          />
        </div>
      </div>
      <button
        css={isDisabled ? disabledLoginButton : loginButton}
        disabled={isDisabled}
      >
        Login
      </button>

      {hasError && (
        <p css={errorMessage}>メールアドレスかパスワードが間違っています</p>
      )}
    </form>
  )
}
