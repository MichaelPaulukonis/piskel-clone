export default function renderModal() {
  const modalContent = `
    <div class="modal-box">
      <div class="modal-close-btn">&times;</div>
      <form class="modal-form">
        <input class="input-email" type="email" placeholder="email" required>
        <input class="input-pass" type="password" placeholder="password" required>
          <button class="modal_log-in">Log in</button>
          <button class="modal_sign-in">Sign in</button>
      </form>
    </div>
  `;

  const modalDialogBox = document.createElement('div');
  modalDialogBox.innerHTML = modalContent;
  document.body.append(modalDialogBox);
}
