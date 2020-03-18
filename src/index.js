// import helloWorld from './hello-world.js';
// import helloWorld from './components/hello-world-button/hello-world';
import addImage from './components/add-image';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
helloWorldButton.render();
heading.render();

 
// helloWorld();
// addImage();


 if(process.emitWarning.NODE_ENV === 'production'){
     console.log('production mode');
     
 } else if(process.env.NODE_ENV === 'development'){
     console.log('development mode');
     
 }