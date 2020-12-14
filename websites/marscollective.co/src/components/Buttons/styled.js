import styled, { css } from 'styled-components'

const baseStyles = css`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: 600;
  color: var(--background);
  background: var(--highLight);
  padding: calc(var(--halfGutter) - 2px) var(--gutter);
  border: var(--borderSize) solid var(--highLight);
  border-radius: var(--halfBorderRadius);
  outline: none;
  transition: 0.5s;
  cursor: pointer;

  :hover {
    background: var(--hover);
    border-color: var(--hover);
  }
`

export const Button = styled.button`
  ${baseStyles}
`

export const ButtonGhost = styled.button`
  ${baseStyles}
  color: var(--highLight);
  background: transparent !important;

  :hover {
    color: var(--hover);
    border-color: var(--hover);
  }
`

export const ButtonGhostWhite = styled(ButtonGhost)`
  color: var(--default);
  border-color: var(--default);
`
