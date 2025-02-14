
// function CustomRender(ReactElement,mainContainer){
//     const domElement = document.createElement(ReactElement.type);
//     domElement.innerHTML = ReactElement.Children;
//     domElement.setAttribute('target',ReactElement.props.target);
//     domElement.setAttribute('href',ReactElement.props.href);
//     mainContainer.appendChild(domElement)
// }
//now the above code is not effective as we need to use the loop to make the above code less repitetive

function CustomRender(ReactElement,mainContainer){
    const domElement = document.createElement(ReactElement.type);
    domElement.innerHTML = ReactElement.Children;
    for(let prop in ReactElement.props){
        if(prop == 'Children'){
            continue;
        }
        domElement.setAttribute(prop,ReactElement.props[prop]);
    }
    mainContainer.appendChild(domElement)
}

const ReactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
    },
    Children : 'click me to Google.com'
}

const mainContainer = document.getElementById('root')
CustomRender(ReactElement,mainContainer)

