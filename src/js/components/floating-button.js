import { LitElement, html } from 'lit';

class FloatingButton extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <a
        class="floating-button shadow-lg"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        data-bs-title="Buat Cerita"
        href="/create-story.html"
      >
        <i class="bi bi-plus-lg"></i>
      </a>
    `;
  }
}

customElements.define('floating-button', FloatingButton);
