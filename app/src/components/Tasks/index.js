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
const Tasks = ({ tasks, onCheckTask, onAddFavorite }) => (
  <ul id="todo-list">
    {tasks.map(task => (
      <Task
        key={task.id}
        {...task}
        onCheckTask={onCheckTask}
        onAddFavorite={onAddFavorite}
      />
    ))}
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onCheckTask: PropTypes.func.isRequired,
  onAddFavorite: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Tasks;
