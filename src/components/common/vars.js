const breakpoints = {
  mobile: '640px',
  desktop: '980px',
};

const font = {
  size: {
    xl: '36px',
    l: '32px',
    m: '24px',
    s: '20px',
    normal: '16px',
  },
  weight: {
    bold: 800,
    semibold: 600,
    normal: 400,
  },
  family: {
    MontserratAlternates: '"Montserrat Alternates", Helvetica, Arial, sans-serif'
  }
}

const color = {
  link: '#1700e8',
  linkHover: '#f41224',
  linkVisited: '#b40eb4',
  textBase: '#000000',
  error: 'tomato',
  gray: '#878787',
  garyBackground: '#f4f4f4',
  alice: '#6e25ff',
  homekit: '#f0357c',
}

const transition = '0.2s';

export { 
  breakpoints, 
  transition,
  font, 
  color 
}