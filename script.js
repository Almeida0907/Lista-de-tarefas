const inputTarefa = document.getElementById('nova-tarefa');
const btnAdicionar = document.getElementById('adicionar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const mensagemVazia = document.getElementById('mensagem-vazia');

function atualizarMensagemVazia() {
  if (listaTarefas.children.length === 0) {
    mensagemVazia.style.display = 'block';
  } else {
    mensagemVazia.style.display = 'none';
  }
}

function adicionarTarefa() {
  const texto = inputTarefa.value.trim();
  if (texto === '') return;

  const li = document.createElement('li');
  li.textContent = texto;

  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Remover';
  btnRemover.className = 'remover';
  btnRemover.onclick = function() {
    listaTarefas.removeChild(li);
    atualizarMensagemVazia();
  };

  li.appendChild(btnRemover);
  listaTarefas.appendChild(li);

  inputTarefa.value = '';
  inputTarefa.focus();
  atualizarMensagemVazia();
}

btnAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    adicionarTarefa();
  }
});

atualizarMensagemVazia();
