import { html, LitElement } from 'lit';

class Navbar extends LitElement {
  createRenderRoot() {
    return this;
  }
  constructor() {
    super();
    this.brandName = 'CeritaAja.com';
  }
  render() {
    return html`<nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand" href="/#">${this.brandName}</a>
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li class="nav-item">
            <a class="nav-link" href="/profile.html">Profil</a>
          </li>
        </ul>
      </div>
    </nav>`;
  }
}

customElements.define('nav-bar', Navbar);
