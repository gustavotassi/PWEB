// Forma 1 - Forma literal

const aluno1 = {
  nome: 'Gustavo',
  RA: '0030481911014'
}

console.log(`Primeira forma: ${aluno1.nome} ${aluno1.RA}`);

// Forma 2 - Usando construtor

const aluno2 = new Object();
      aluno2.nome = 'Gustavo',
      aluno2.RA = '0030481911014';


console.log(`Segunda forma: ${aluno2.nome} ${aluno2.RA}`);

// Forma 3 - Dot notation

const aluno3 = {};
      aluno3['nome'] = 'Gustavo',
      aluno3['RA'] = '0030481911014';

console.log(`Terceira forma: ${aluno3.nome} ${aluno3.RA}`);