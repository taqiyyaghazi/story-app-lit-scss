import { html, LitElement } from 'lit';

class Avatar extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <img
        src="https://avatars.githubusercontent.com/u/64888591?s=400&u=1f3d862f60f1bc49e4db06e651af7d0ddb3f7a81&v=4"
        alt="avatar"
        class="avatar"
      />
    `;
  }
}

customElements.define('avatar-component', Avatar);
