function start() {
  const name = prompt('Seu nome:');
  const n1 = parseFloat(prompt('Primeira nota:'));
  const n2 = parseFloat(prompt('Segunda nota:'));
  const n3 = parseFloat(prompt('Terceira nota:'));

  var media = (n1 + n2 + n3) / 3.0;

  prompt(`Nome: ${name} | Média: ${media}`);
}