// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import store from './components/stores';
import {Provider} from 'mobx-preact';

let root;
function init() {
    let App = require('./components/app').default;
    root = render(<Provider {...store} ><App /></Provider>, document.body, root);
}

// in development, set up HMR:
if (module.hot) {
    //require('preact/devtools');   // turn this on if you want to enable React DevTools!
    module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();
