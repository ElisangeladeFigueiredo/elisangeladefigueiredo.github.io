const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    toggle.textContent = opened ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const idMail = "btn-email-";
const idMsg = "email-copy-msg-";

for(let i = 1; i <= 2; i++) {
  let _emailBtn = document.getElementById(idMail + i);
  let _emailMsg = document.getElementById(idMsg + i);

  _emailBtn.addEventListener("click", async () => {
    let _email = 'elisangeladefigueiredo@adv.oabsp.org.br';

    try {
      await navigator.clipboard.writeText(_email);

      _emailMsg.textContent = "'elisangeladefigueiredo@adv.oabsp.org.br' copiado para a área de transferência.";

      setTimeout(() => {
        _emailMsg.textContent = "";
      }, 3000);
    } catch (error) {
      _emailMsg.textContent = "E-mail: " + _email;
    }

    // Não usamos preventDefault().
    // Assim o mailto continua funcionando normalmente.
  });
}