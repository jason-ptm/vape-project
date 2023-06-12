import { styled } from 'styled-components'

export const ItemsCount = styled.div`
  color: inherit;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${(props) => (props.color ? props.color : '')};
  font-size: 18px;
  padding: 4px;
  border-radius: 100%;
`
