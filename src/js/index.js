// Import our custom CSS
import '../scss/main.scss';
import './components/navbar';
import './components/floating-button';
import './components/story-card';
import './components/toast';
import './components/avatar';

// Import javascript file as needed
import * as bootstrap from 'bootstrap';
//import dashboard
import Home from './controllers/home';
import CreateStory from './controllers/create-story';
import Profile from './controllers/profile';

const routes = {
  '/': Home,
  '/create-story.html': CreateStory,
  '/profile.html': Profile,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

  const route = detectRoute();
  route.init();
});
