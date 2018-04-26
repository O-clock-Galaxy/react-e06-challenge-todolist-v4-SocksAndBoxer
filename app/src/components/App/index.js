/*
 * NPM import
 */
import React from 'react';

/*
 * Local import
 */
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

/*
 * Code
 */
class App extends React.Component {
  /*
   * State
   */
  state = {
    tasks: [
      {
        id: 5,
        label: 'farine',
        done: true,
        favorite: true,
      },
      {
        id: 12,
        label: 'lait',
        done: false,
        favorite: false,
      },
      {
        id: 4,
        label: 'sucre',
        done: false,
        favorite: false,
      },
    ],
  }
  /*
   * Actions
   */
  addTask = () => {
    // Je créé un tableau avec toutes les ids
    const allIds = this.state.tasks.map(task => task.id);

    // Je calcule le prochain ID en prenant la plus haute et en ajoutant 1
    const newId = Math.max(...allIds) + 1;

    // je prends l'element du DOM, temporaire
    const input = document.getElementById('todo-input');
    const label = input.value;

    // Creer une tache et la remplir, pour le test
    const task = {
      id: newId,
      label,
      done: false,
      favorite: false,
    };

    const tasks = [...this.state.tasks, task];
    input.value = '';

    // Modifier le state
    this.setState({ tasks });
  }

  checkTask = id => () => {
    console.log('je coche une case');
    console.log(`ID : ${id}`);

    // Récupérer la liste des taches
    const newTasks = this.state.tasks.map((task) => {
      // Cibler la tache dont l'id est reçu
      if (task.id === id) {
        // Inverser la valeur
        return {
          // id: task.id,
          // label: task.label,
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    const favFirst = newTasks.sort((a, b) => b.favorite - a.favorite);
    const tasks = favFirst.sort((a, b) => a.done - b.done);
    // Modifier le state avec la Copie
    this.setState({ tasks });
  }


  addFavorite = id => () => {
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          // favorite: (task.favorite ? !task.favorite : task.favorite),
          favorite: !task.favorite,
        };
      }
      return task;
    });

    const favFirst = newTasks.sort((a, b) => b.favorite - a.favorite);
    const tasks = favFirst.sort((a, b) => a.done - b.done);

    this.setState({ tasks });
  }
  /*
   * Rendu
   */
  render() {
    const { tasks } = this.state;

    // Taches en cours / non-effectuées
    const count = tasks.filter(task => !task.done).length;

    return (
      <div id="todo">
        <Form onAddTask={this.addTask} />
        <Counter count={count} />
        <Tasks tasks={tasks} onCheckTask={this.checkTask} onAddFavorite={this.addFavorite} />
      </div>
    );
  }
}

/*
 * Export
 */
export default App;
