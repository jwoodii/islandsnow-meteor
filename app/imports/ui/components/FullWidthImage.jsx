import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import './style.css';

import image from './IslandSnowImg.jpg';


export default class FullWidthImage extends React.Component {
  render() {
    return (
        <img className="ui fluid image" src={(image)}/>
    );
  }
}
