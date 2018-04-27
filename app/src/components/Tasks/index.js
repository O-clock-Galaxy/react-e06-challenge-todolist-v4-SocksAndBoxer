/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Task from 'src/components/Task';

/**
 * Code
 */
const Tasks = ({
  tasks, actions,
}) => (
  <ul id="todo-list">
    {tasks.map(task => (
      <Task
        key={task.id}
        {...task}
        onCheckTask={actions.onCheckTask}
        onAddFavorite={actions.onAddFavorite}
        onRemoveTask={actions.onRemoveTask}
      />
    ))}
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};
/**
 * Export
 */
export default Tasks;
