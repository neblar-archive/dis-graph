export default class Graph {
  constructor() {
    this.state = {
      status: 'constructed',
    };
  }

  /**
   * @param {any} schema
   */
  set schema(schema) {
    this.state.status = 'schema updated';
    this.state.schema = schema;
  }

  async html() {
    return `
      <div>Hello Boiler! 👋</div>
      <p>status: ${this.state.status}</p>
    `;
  }

  static async styles() {
    return `
      p {
        color: red;
      }
    `;
  }
}
