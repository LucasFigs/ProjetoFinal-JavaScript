let tasks = [];

function addTask() {
  const taskText = prompt('Digite a nova tarefa: ');

  if (taskText.trim() !== '') {
    const task = {
      text: taskText,
    };

    tasks.push(task);
    alert('Tarefa adicionada com sucesso!');
  } else {
    alert('Por favor, insira um texto válido.');
  }
}

function editTask(index) {
  const newText = prompt('Digite o novo texto da tarefa: ');

  if (newText.trim() !== '') {
    if (index >= 0 && index < tasks.length) {
      tasks[index].text = newText;
      alert('Tarefa editada com sucesso!');
    } else {
      alert('Índice inválido.');
    }
  } else {
    alert('Por favor, insira um texto válido.');
  }
}

function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    alert('Tarefa removida com sucesso!');
  } else {
    alert('Índice inválido.');
  }
}

function listTasks() {
  let taskList = 'Lista de tarefas:\n';
  tasks.forEach((task, index) => {
    taskList += `- ${index}: ${task.text}\n`;
  });
  alert(taskList);
}

function getTaskByIndex(index) {
  if (index >= 0 && index < tasks.length) {
    alert(`Tarefa encontrada: ${tasks[index].text}`);
  } else {
    alert('Índice inválido.');
  }
}

function showMenu() {
  return prompt(
    '===== Menu =====\n1. Adicionar Tarefa\n2. Editar Tarefa\n3. Remover Tarefa\n4. Listar Tarefas\n5. Buscar Terefa\n0. Sair'
  );
}

function main() {
  let option;

  do {
    option = showMenu();

    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        const editIndex = prompt('Digite o Índice da tarefa a ser editada: ');
        editTask(Number(editIndex));
        break;
      case '3':
        const removeIndex = prompt('Digite o Índice da tarefa a ser removida: ');
        removeTask(Number(removeIndex));
        break;
      case '4':
        listTasks();
        break;
      case '5':
        const taskIndex = prompt('Digite o Índice da tarefa desejada: ');
        getTaskByIndex(Number(taskIndex));
        break;
      case '0':
        alert('Saindo do programa. Até mais!');
        break;
      default:
        alert('Opção inválida. Tente novamente.');
        break;
    }
  } while (option !== '0');
}

main();
