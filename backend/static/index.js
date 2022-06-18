import { html, render } from './utils.js';
import { App } from './frontend/App.js';

render(html`<${App}/>`, document.body);
