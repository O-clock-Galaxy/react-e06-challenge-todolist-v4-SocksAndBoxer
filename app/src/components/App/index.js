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
    input: '',
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
  };

  componentWillMount = () => {
    const tasks = this.orderTask(this.state.tasks);
    this.setState({ tasks });
  }
  /*
   * Actions
   */
  changeInput = (value) => {
    this.setState({ input: value });
  }

  addTask = () => {
    // Je créé un tableau avec toutes les ids
    const allIds = this.state.tasks.map(task => task.id);

    // Je calcule le prochain ID en prenant la plus haute et en ajoutant 1
    const newId = Math.max(...allIds) + 1;

    // je prends l'element du DOM, temporaire
    // const input = document.getElementById('todo-input');
    const label = this.state.input;

    // Creer une tache et la remplir, pour le test
    const task = {
      id: newId,
      label,
      done: false,
      favorite: false,
    };

    const tasks = [...this.state.tasks, task];

    // Modifier le state
    this.setState({
      tasks,
      input: '',
    });
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

    const tasks = this.orderTask(newTasks);
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

    const tasks = this.orderTask(newTasks);

    this.setState({ tasks });
  }

  removeTask = id => () => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  }

  orderTask = (newTasks) => {
    const favFirst = newTasks.sort((a, b) => b.favorite - a.favorite);
    const tasks = favFirst.sort((a, b) => a.done - b.done);
    return tasks;
  }
  /*
   * Rendu
   */
  render() {
    const { tasks, input } = this.state;

    // Taches en cours / non-effectuées
    const count = tasks.filter(task => !task.done).length;

    return (
      <div id="todo">
        <Form
          onAddTask={this.addTask}
          inputValue={input}
          onChangeInput={this.changeInput}
        />
        <Counter count={count} />
        <Tasks
          tasks={tasks}
          actions={{
            onCheckTask: this.checkTask,
            onAddFavorite: this.addFavorite,
            onRemoveTask: this.removeTask,
          }}
        />
      </div>
    );
  }
}

/*
 * Export
 */
export default App;
