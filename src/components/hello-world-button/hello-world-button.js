import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClas = 'hello-world-button';

    render(){
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add(this.buttonCssClas);
        const body = document.querySelector('body');

        button.onclick = function(params) {
            const p = document.createElement('p');
            p.innerHTML = 'hello world';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        
        body.appendChild(button);
    }
};

export default HelloWorldButton;
