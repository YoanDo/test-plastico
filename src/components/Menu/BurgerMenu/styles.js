import theme from '../../../assets/theme'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '20px',
    top: '36px',
  },
  bmBurgerBars: {
    background: theme.black,
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    color: theme.black,
  },
  bmCross: {
    background: theme.black,
  },
  bmMenuWrap: {
    top: 0,
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: theme.white,
    padding: '2rem',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: theme.black,
  },
  bmItemList: {
    color: theme.black,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

export default styles
