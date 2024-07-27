import { showToast } from '../utils/toast';
const CreateStory = {
  init() {
    this._initialListener();
  },

  _initialListener() {
    const form = document.getElementById('story-form');

    // Loop over them and prevent submission
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
        } else {
          form.classList.add('was-validated');
          event.preventDefault();
          showToast({ title: 'Berhasil!', message: 'Selamat kamu berhasil membuat cerita baru' });
          setTimeout(() => {
            window.location.href = '/';
          }, 1500);
        }
      },
      false,
    );
  },
};

export default CreateStory;
