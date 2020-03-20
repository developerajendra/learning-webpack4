// import _ from 'lodash';
import React from 'react';
import Heading from './components/heading/heading';
import TempleImage from './components/temple-image/temple-image';


const heading = new Heading();
heading.render('temple page');

const templeImage = new TempleImage();
templeImage.render();