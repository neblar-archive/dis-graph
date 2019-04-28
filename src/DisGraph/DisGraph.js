export default class DisGraph extends HTMLElement {
  constructor() {
    super();
    this.state = 'constructed';
    this.loadShadowRoot();
  }

  connectedCallback() {
    this.state = 'connected';
  }

  disconnectedCallback() {
    this.state = 'disconnected';
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.state = `attributeChanged: ${oldVal} => ${newVal}`;
  }

  adoptedCallback() {
    this.state = 'adoptedCallback';
  }

  loadShadowRoot() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div>Hello Boiler! 👋</div>
    `;
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
}
