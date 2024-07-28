import { api } from '../utils/api';
import LocalStorage from '../utils/local-storage';

const Home = {
  async init() {
    this._user = LocalStorage.get('user');
    if (!this._user) {
      window.location.href = '/login.html';
    }
    await this._initialData();
  },

  async _initialData() {
    const stories = await this._fetchStories();
    this._populateStoryCard(stories);
  },

  async _fetchStories() {
    try {
      this._setLoading(true);
      const response = await api.get('/stories', {
        headers: { Authorization: `Bearer ${this._user.token}` },
      });
      return response.data.listStory;
    } catch (err) {
      console.log(err);
    } finally {
      this._setLoading(false);
    }
  },

  _setLoading(isLoading) {
    const mainElement = document.querySelector('main');
    if (isLoading) {
      const placeholderWrapper = document.createElement('section');
      placeholderWrapper.id = 'placeholder-wrapper';
      placeholderWrapper.classList.add('row', 'gap-3', 'p-5');
      Array.from({ length: 4 }).forEach((_) => {
        const placeholder = document.createElement('story-card-placeholder');
        placeholder.classList.add('col');
        placeholderWrapper.appendChild(placeholder);
      });
      mainElement.appendChild(placeholderWrapper);
    } else {
      const placeholderWrapper = document.getElementById('placeholder-wrapper');
      if (placeholderWrapper) {
        placeholderWrapper.remove();
      }
    }
  },

  _populateStoryCard(stories = null) {
    if (!(typeof stories === 'object')) {
      throw new Error(`Parameter stories should be an object. The value is ${stories}`);
    }
    if (!Array.isArray(stories)) {
      throw new Error(`Parameter stories should be an array. The value is ${stories}`);
    }
    const storiesContainer = document.getElementById('stories-container');
    stories.forEach((story) => {
      const storyCard = document.createElement('story-card');
      storyCard.name = story.name;
      storyCard.photoUrl = story.photoUrl;
      storyCard.description = story.description;
      storyCard.createdAt = story.createdAt;
      storyCard.classList.add('col');
      storiesContainer.appendChild(storyCard);
    });
  },
};

export default Home;
