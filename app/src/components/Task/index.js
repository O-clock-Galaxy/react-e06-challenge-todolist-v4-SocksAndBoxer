/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TiStarFullOutline from 'react-icons/lib/ti/star-full-outline';
import TiStarOutline from 'react-icons/lib/ti/star-outline';


/**
 * Local import
 */


/**
 * Code
 */
const Task = ({
  id, label, done, favorite, onCheckTask, onAddFavorite,
}) => {
  // Calcul des classes courantes
  const currentClassNames = classNames(
    'task',
    { 'task--done': done },
  );
  return (
    <li className={currentClassNames}>
      <input
        type="checkbox"
        checked={done}
        onChange={onCheckTask(id)}
      />
      <span className="task-label">{label}</span>
      <span className="task-star" onClick={onAddFavorite(id)}>{favorite ? <TiStarFullOutline /> : <TiStarOutline />}</span>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  favorite: PropTypes.bool.isRequired,
  onCheckTask: PropTypes.func.isRequired,
  onAddFavorite: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Task;
