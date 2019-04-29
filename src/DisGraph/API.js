import Graph from './Graph';

/**
 * top level class to be used as an API between
 * the dom and the graphing logic
 */
export default class API extends HTMLElement {
  constructor() {
    super();
    this.graph = new Graph();
    this.initShadowRoot();
    this.loadStyles();
  }

  /**
   * initializes the shadow root to be interfaced with in future
   */
  initShadowRoot() {
    // initialize shadow root
    const template = document.createElement('template');
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content);

    // initialize view
    this.view = document.createElement('div');
    this.shadowRoot.appendChild(this.view);

    // initialize css
    this.styles = document.createElement('style');
    this.shadowRoot.appendChild(this.styles);
  }

  /**
   * updates the view
   */
  async updateView() {
    this.view.innerHTML = await this.graph.html();
  }

  async loadStyles() {
    this.styles.innerHTML = await Graph.styles();
  }

  /**
   * used for setting the schema on the graph object
   * and update the view
   * @param {any} schema
   */
  set schema(schema) {
    this.graph.schema = schema;
    this.updateView();
  }
}
