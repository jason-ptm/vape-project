import { styled } from 'styled-components'

export const BackgroundContainer = styled.div<{ bgcolor?: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(props: any) => (props.bgcolor ? props.bgcolor : '')};
`

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  gap: 10px;
  padding: 10px 0;
`

export const IconsCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`

export const Text = styled.p<{ color?: string }>`
  width: 80%;
  max-width: 900px;
  text-align: center;
  font-size: 0.9rem;
  opacity: ${(props: any) => (props.color ? '1' : '0.5')};
  line-height: 1.8em;
  letter-spacing: 0.7px;
  color: ${(props: any) => (props ? props.color : 'inherit')};

  & span a {
    cursor: pointer;
    color: #999;
    text-decoration: none;
  }

  & span:hover a {
    color: #ddd;
  }
`

export const EmailCont = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  gap: 10px;
  opacity: 0.4;
`
