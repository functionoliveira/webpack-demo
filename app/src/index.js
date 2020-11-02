import './styles/main.scss';

function component() {
    const element = document.createElement('h1');
    element.innerHTML = ['Hello', 'webpack'].join(' ');
    return element;
}

document.body.prepend(component());