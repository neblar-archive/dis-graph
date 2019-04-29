import { API } from './DisGraph';

/** Using name as defined in package */
const elementName = require('../package.json').name;

/** Initiating the element in the global scope */
window.customElements.define(elementName, API);
