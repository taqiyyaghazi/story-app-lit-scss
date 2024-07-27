import * as bootstrap from 'bootstrap';
export const showToast = ({ title, message }) => {
  const toastElement = document.getElementById('toast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  toastTitle.innerText = title || '';
  toastMessage.innerText = message || '';
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
};
