import { html, LitElement } from 'lit';
import { formatDate } from '../utils/datetime';

class StoryCard extends LitElement {
  static properties = {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    photoUrl: {
      type: String,
    },
    createdAt: {
      type: String,
    },
  };
  createRenderRoot() {
    return this;
  }

  render() {
    return html` <div class="card" style="width: 18rem">
      <img src="${this.photoUrl}" class="card-img-top" alt="image" />
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${formatDate(this.createdAt)}</h6>
        <p class="card-text">${this.description}</p>
      </div>
    </div>`;
  }
}

customElements.define('story-card', StoryCard);
