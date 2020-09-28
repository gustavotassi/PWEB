function start() {
  const n1 = parseInt(prompt('Informe o primeiro número:'), 10);
  const n2 = parseInt(prompt('Informe o segundo número:'), 10);

  var sum = n1 + n2;
  var sub = n1 - n2;
  var prod = n1 * n2;
  var div = n1 / n2;
  var res = n1 % n2;

  alert(`Soma: ${sum}\nSubtração: ${sub}\nProduto: ${prod}\nDivisão: ${div}\nResto: ${res}`);
}