import { html, LitElement } from 'lit';

class Toast extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto" id="toastTitle"></strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body" id="toastMessage"></div>
      </div>
    </div>`;
  }
}

customElements.define('toast-component', Toast);
