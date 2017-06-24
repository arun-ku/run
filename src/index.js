import React from 'react';
import { render } from 'react-dom';

import { App } from './components/core'
import './main.scss';

const elem = document.getElementById('app');

render(<App /> , elem);