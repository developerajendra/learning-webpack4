import Temple from './temple-image.jpg';
import './temple-image.scss';

class TempleImage {
    render(){
        const image = document.createElement('img');
        image.src = Temple;
        image.alt = 'temple image';
        image.classList.add('temple-image');
        const body  = document.querySelector('body');
        body.appendChild(image);

    }
}

export default TempleImage;