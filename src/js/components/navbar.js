import { html, LitElement } from 'lit';
import LocalStorage from '../utils/local-storage';

class Navbar extends LitElement {
  createRenderRoot() {
    return this;
  }
  constructor() {
    super();
    this.brandName = 'CeritaAja.com';
    this.user = LocalStorage.get('user');
  }
  render() {
    return html`<nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">${this.brandName}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">${this.brandName}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" href="/profile.html">Profil</a>
              </li>
            </ul>
            <div class="d-flex mt-3 gap-2">${this.authCtatemplate()}</div>
          </div>
        </div>
      </div>
    </nav>`;
  }

  authCtatemplate() {
    if (this.user) {
      return html`<button
        class="btn btn-primary"
        type="button"
        @click=${() => {
          LocalStorage.remove('user');
          window.location.reload();
        }}
      >
        Keluar <i class="bi bi-box-arrow-right"></i>
      </button>`;
    } else {
      return html`<a class="btn btn-primary" type="button" href="/login.html">Masuk</a>
        <a class="btn btn-outline-primary" type="button" href="/register.html">Daftar</a>`;
    }
  }
}

customElements.define('nav-bar', Navbar);
