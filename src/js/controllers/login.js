import { api } from '../utils/api';
import LocalStorage from '../utils/local-storage';
import { showToast } from '../utils/toast';

const Login = {
  init() {
    const form = document.getElementById('login-form');

    // Loop over them and prevent submission
    form.addEventListener(
      'submit',
      async (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
        } else {
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          event.preventDefault();
          await this.handleSubmit({ email, password });

          form.classList.add('was-validated');
        }
      },
      false,
    );
  },
  async handleSubmit(data) {
    try {
      this.setLoading(true);
      const response = await api.post('/login', data);
      LocalStorage.set('user', JSON.stringify(response.data.loginResult));
      showToast({ title: 'Berhasil!', message: 'Selamat kamu berhasil masuk!' });
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (err) {
      showToast({ title: 'Gagal!', message: err.response.data.message });
    } finally {
      this.setLoading(false);
    }
  },
  setLoading(isLoading) {
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

export default Login;
