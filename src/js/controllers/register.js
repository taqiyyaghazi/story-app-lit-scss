import { api } from '../utils/api';
import { showToast } from '../utils/toast';

const Register = {
  init() {
    const form = document.getElementById('register-form');

    // Loop over them and prevent submission
    form.addEventListener(
      'submit',
      async (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
        } else {
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          event.preventDefault();
          await this._handleSubmit({ name, email, password });

          form.classList.add('was-validated');
        }
      },
      false,
    );
  },
  async _handleSubmit(data) {
    try {
      this._setLoading(true);
      await api.post('/register', data);
      showToast({ title: 'Berhasil!', message: 'Selamat kamu berhasil daftar!' });
      setTimeout(() => {
        window.location.href = '/login.html';
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

export default Register;
