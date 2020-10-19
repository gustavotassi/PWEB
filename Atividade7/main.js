const button = document.getElementById("send");

button.addEventListener('click', iniciar);

function iniciar() {
  const first = document.getElementById("first").value;
  const second = document.getElementById("second").value;
  const third = document.getElementById("third").value;

  alert(`O maior número é ${Math.max(first, second, third)}`);
}