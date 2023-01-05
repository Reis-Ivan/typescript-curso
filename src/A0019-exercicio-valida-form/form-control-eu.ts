import validator from 'validator';

type ValidForm = (form: HTMLFormElement) => void;

export const validaForm: ValidForm = (form) => {
  const username = form.querySelector('.username') as HTMLInputElement;
  const email = form.querySelector('.email') as HTMLInputElement;
  const password = form.querySelector('.password') as HTMLInputElement;
  const password2 = form.querySelector('.password2') as HTMLInputElement;

  if (!username.value) {
    const msg = username.nextElementSibling as HTMLSpanElement;
    msg.innerHTML = '';
    msg.innerHTML = 'Usuário não pode ser vazio.';
    msg.style.display = 'contents';
  }

  if (!validator.isEmail(email.value)) {
    const msg = email.nextElementSibling as HTMLSpanElement;
    msg.innerHTML = '';
    msg.innerHTML = 'E-mail deve ser válido.';
    msg.style.display = 'contents';
  }

  if (password.value !== password2.value) {
    const msg1 = password.nextElementSibling as HTMLSpanElement;
    const msg2 = password2.nextElementSibling as HTMLSpanElement;

    msg1.innerHTML = '';
    msg1.innerHTML = 'As senhas devem ser iguais';
    msg1.style.display = 'contents';

    msg2.innerHTML = '';
    msg2.innerHTML = 'As senhas devem ser iguais';
    msg2.style.display = 'contents';
  }
};

function main(): void {
  const form = document.querySelector('.form') as HTMLFormElement;
  function recebeEvento(event: SubmitEvent): void {
    event.preventDefault();
    validaForm(form);
  }
  form.addEventListener('submit', recebeEvento);
}

main();
