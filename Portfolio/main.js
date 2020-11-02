const gitButton = document.getElementById('github-digiwaiter');
gitButton.addEventListener("click", abrirGit);

const emailButton = document.getElementById('send-email');
emailButton.addEventListener("click", enviarEmail);

const whatsButton = document.getElementById('send-whatsapp');
whatsButton.addEventListener("click", enviarMensagem);

function abrirGit() {
  const url = "https://github.com/gustavotassi/digiwaiter";
  window.open(url, '_blank');
}

function enviarEmail() {
  const url = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=souzagustavotassi@gmail.com";
  window.open(url, '_blank');
}

function enviarMensagem() {
  const url = "https://api.whatsapp.com/send?l=pt_BR&phone=5515981233122&text=Olá. Estava dando uma olhada no seu portfólio e resolvi mandar uma mensagem.";
  window.open(url, '_blank');
}