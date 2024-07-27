const Home = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchStory = await fetch('/data.json');
    const response = await fetchStory.json();
    this._myStory = response.listStory;
    this._populateStoryCard(this._myStory);
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
