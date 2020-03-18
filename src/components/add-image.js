import sarita_kushum from './sarita_kushum.jpg';

function addImage(params) {
    const img = document.createElement('img');
    img.alt = 'Akashardham picture';
    img.width = 300;
    img.src = sarita_kushum;
    const body = document.querySelector('body');
    body.appendChild(img);
} 

export default addImage