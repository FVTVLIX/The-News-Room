import React from 'react';
import { storiesOf } from '@storybook/react';

import Elements from './Elements'



storiesOf('Elements', module)
  .add('Header', () => <Elements label="The News Room" style={headerLayout} />) 
  .add('Search', () => <Elements label="Search" style={searchStyle} />) 
  .add('Read More', () => <Elements label="Read More" style={readMoreStyle} />) 
  .add('Article Backdrop', () => <Elements style={backDropStyle} />) 
  .add('*tablet* Header', () => <Elements label="The News Room" style={tabletHeaderStyle} />)
  .add('*mobile* Header', () => <Elements label="The News Room" style={mobileHeaderStyle} />)


const headerLayout = {
  background: "linear-gradient(180deg, rgba(73,73,73,1) 0%, rgba(35,40,48,1) 100%)",
  borderRadius: '0px 0px 7px 7px',
  color: 'white',
  fontFamily: 'Playfair Display',
  padding: '50px 550px',
  fontSize: '35px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
}

const searchStyle = {
  background: "radial-gradient(circle, rgba(223,223,223,1) 0%, rgba(200,200,200,1) 100%)",
  borderRadius: '7px',
  color: 'black',
  // fontFamily: 'Girassol',
  padding: '15px 30px',
  fontSize: '15px',
  // webkitTextStroke: '.5px black',
  textTransform: 'uppercase',
  letterSpacing: '2px',
}

const readMoreStyle = {
  background: "radial-gradient(circle, rgba(223,223,223,1) 0%, rgba(200,200,200,1) 100%)",
  borderRadius: '7px',
  color: 'black',
  padding: '25px 50px',
  fontSize: '15px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
}

const backDropStyle = {
  background: "linear-gradient(180deg, rgba(73,73,73,1) 0%, rgba(35,40,48,1) 100%)",
  borderRadius: '7px',
  color: 'white',
  padding: '300px 200px',
  fontSize: '15px',
}

const tabletHeaderStyle = {
  background: "linear-gradient(180deg, rgba(73,73,73,1) 0%, rgba(35,40,48,1) 100%)",
  // borderRadius: '7px',
  color: 'white',
  padding: '30px 500px',
  fontSize: '20px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
}

const mobileHeaderStyle = {
  background: "linear-gradient(180deg, rgba(73,73,73,1) 0%, rgba(35,40,48,1) 100%)",
  // borderRadius: '7px',
  color: 'white',
  padding: '30px 100px',
  fontSize: '15px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
}




