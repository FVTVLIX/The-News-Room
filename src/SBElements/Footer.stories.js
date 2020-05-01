import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from '../Footer'

const footerLayout = {
  background: "linear-gradient(180deg, rgba(73,73,73,1) 0%, rgba(35,40,48,1) 100%)",
  borderRadius: '7px 7px 0px 0px',
  color: 'white',
  fontFamily: 'Playfair Display',
  padding: '50px 550px',
  fontSize: '35px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
}

storiesOf('Footer', module)
  .add('Footer', () => <Footer style={footerLayout} label="Copyright © Andres Gonzalez. Powered by NewsAPI"></Footer>)