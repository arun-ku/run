import React from 'react';
import { render } from 'react-dom';

const App = () => (<span>React App</span>);

const elem = document.getElementById('app');

render(<App /> , elem);