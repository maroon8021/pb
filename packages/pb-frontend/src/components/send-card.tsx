import { css } from "@emotion/react"

const container = css`
  width: 60rem;
  margin: 10rem auto 0;
  border: #bdbdbd 1px solid;
  border-radius: 3px;
  background-color: #fff;
`

const userInputContainer = css`
  padding: 0.8rem 1.6rem;
  border-bottom: #bdbdbd 1px solid;
`

const userInput = css`
  font-size: 1.8rem;
  border: none;
  outline: none;
  width: 95%;
  margin-left: 0.8rem;
`

const messageArea = css`
  padding: 1.6rem;
  font-size: 1.4rem;
  width: 100%;
  height: 10rem;
  border: none;
  outline: none;
  resize: none;
`

const bottomContainer = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.8rem 1.6rem;
  border-top: #bdbdbd 1px solid;
`

const pointInput = css`
  border: none;
  outline: none;
  font-size: 1.8rem;
  width: 7rem;
  margin: 0 0.8rem;
`
const sendButtonBase = css`
  padding: 0.8rem 1.6rem;
  border-radius: 15px;
  color: #fff;
`

const sendButton = css`
  ${sendButtonBase}
  background-color: #03a9f4;

  opacity: 0.6;
  &:focus,
  &:hover {
    opacity: 1;
  }
`
const disabledSendButton = css`
  ${sendButtonBase}
`
export type SuggestUserData = {
  id: string
  displayName: string
  userName: string
}

type SendCardProps = {
  suggestUsers: SuggestUserData[]
}

export const SendCard = ({ suggestUsers }: SendCardProps) => {
  // const isDisabled = useMemo(
  //   () => !email || !password || loading,
  //   [email, password, loading]
  // )
  return (
    <form css={container}>
      <div css={userInputContainer}>
        <label>@</label>
        <input css={userInput} type="text" />
      </div>
      <textarea css={messageArea} placeholder="いつもありがとうございます！" />
      <div css={bottomContainer}>
        <div>
          <label>P:</label>
          <input css={pointInput} type="number" placeholder="0" min="1" />
        </div>
        <div>
          <button css={sendButton}>送信</button>
        </div>
      </div>
    </form>
  )
}

const userSuggest = () => {}
