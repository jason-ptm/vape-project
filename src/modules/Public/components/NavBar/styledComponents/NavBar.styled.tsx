import styled from 'styled-components'

export const NavBarStyle = styled.div<{ hide: string }>`
  width: 100%;
  height: 60px;
  padding: 0 30px;
  position: fixed;
  top: ${(props: any) => (props.hide == 'true' ? '-60px' : '0')};
  background-color: inherit;
  z-index: 3000;
  transition: top 0.5s;

  .container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: inherit;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    bottom: -20px;
    left: 0;
    height: 20px;
    z-index: 200;
    background: linear-gradient(
      180deg,
      ${(props: any) =>
    props.theme.background ? `${props.theme.background} 0%` : ''},
      rgba(0, 0, 0, 0) 100%
    );
  }

  @media (max-width: 350px) {
    padding: 10px;
  }
`

export const NavbarItemsCont = styled.div`
  height: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background-color: inherit;

  .icon-menu {
    visibility: hidden;
    display: none;
  }

  @media (max-width: 550px) {
    .icon-menu {
      visibility: visible;
      display: block;
    }
  }
`

export const ItemsResponsiveCont = styled.div`
  height: 100%;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background-color: inherit;
  z-index: 3500;

  @media (max-width: 550px) {
    opacity: 0;
    width: 100%;
    min-width: 300px;
    display: flex;
    position: absolute;
    right: 0;
    top: 60px;
    flex-direction: column;
    gap: 10px;
    height: calc(100vh - 60px);
    min-height: 400px;
    justify-content: center;
    transform: translateX(100%);
    transition: transform 0.5s;

    &.open {
      opacity: 1;
      transform: translateX(0);
    }

    & > div {
      width: 90%;
      height: 60px;
    }

    & > div a.active,
    & > div:hover {
      color: ${(props: any) => (props.theme.light ? props.theme.light : '')};
      background-color: transparent;
    }

    & > div a::after {
      display: none;
    }
  }
`

export const NavbarItem = styled.div`
  width: 100px;
  height: 100%;
  position: relative;
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2mm;
  transition: background 0.5s;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }

  & a.active {
    background-color: ${(props: any) =>
    props.theme.main ? props.theme.main : ''};
  }

  & a.active::after {
    width: 100%;
  }

  &:hover {
    background-color: ${(props: any) =>
    props.theme.main ? props.theme.main : ''};
  }
  & a:after {
    content: '';
    position: absolute;
    width: 0;
    bottom: 0;
    height: 2px;
    background-color: ${(props: any) =>
    props.theme.light ? props.theme.light : ''};
    transition: width 0.5s;
  }
  & a: hover::after {
    width: 100%;
  }
`
