import { html, LitElement } from 'lit';

class StoryCardPlaceholder extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div class="card" aria-hidden="true" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title placeholder-glow">
          <span class="placeholder col-4"></span>
        </h5>
        <h5 class="card-subtitle mb-2 placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
        </p>
      </div>
    </div>`;
  }
}

customElements.define('story-card-placeholder', StoryCardPlaceholder);
