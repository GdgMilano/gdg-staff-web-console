import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import 'glamor/reset'
import { init } from './init'
import './index.css'
init()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
