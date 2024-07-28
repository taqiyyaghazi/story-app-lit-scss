import { api } from '../utils/api';
import LocalStorage from '../utils/local-storage';
import { showToast } from '../utils/toast';

const CreateStory = {
  init() {
    this._initialListener();
  },

  _initialListener() {
    const form = document.getElementById('story-form');

    form.addEventListener(
      'submit',
      async (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
        } else {
          const photo = document.getElementById('photo').files[0];
          const description = document.getElementById('description').value;
          console.log(photo, description);
          form.classList.add('was-validated');
          event.preventDefault();
          await this._handleSubmit({ photo, description });
        }
      },
      false,
    );
  },
  async _handleSubmit(data) {
    try {
      this._setLoading(true);
      const user = LocalStorage.get('user');
      await api.post('/stories', data, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${user.token}` },
      });
      showToast({ title: 'Berhasil!', message: 'Selamat kamu membuat cerita baru!' });
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (err) {
      showToast({ title: 'Gagal!', message: err.response.data.message });
    } finally {
      this._setLoading(false);
    }
  },
  _setLoading(isLoading) {
    const button = document.querySelector('button[type="submit"]');
    const spinner = document.getElementById('spinner');

    if (isLoading) {
      spinner.classList.remove('d-none');
      button.setAttribute('disabled', 'disabled');
    } else {
      spinner.classList.add('d-none');
      button.removeAttribute('disabled');
    }
  },
};

export default CreateStory;
