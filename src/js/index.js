// Import our custom CSS
import '../scss/main.scss';
import './components/navbar';
import './components/floating-button';
import './components/story-card';
import './components/toast';
import './components/avatar';
import './components/story-card-placeholder';

// Import javascript file as needed
import * as bootstrap from 'bootstrap';
//import dashboard
import Home from './controllers/home';
import CreateStory from './controllers/create-story';
import Profile from './controllers/profile';
import Login from './controllers/login';
import Register from './controllers/register';

const routes = {
  '/': Home,
  '/create-story.html': CreateStory,
  '/profile.html': Profile,
  '/login.html': Login,
  '/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

  const route = detectRoute();
  route.init();
});
