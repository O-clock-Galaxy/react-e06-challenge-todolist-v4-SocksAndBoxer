/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */
const Form = ({ onAddTask }) => {
  const handleSubmit = (evt) => {
    // bloque le comportement par défaut
    evt.preventDefault();
    // j'execute onAddTask (fonction provenant de App)
    onAddTask();
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="todo-input"
        placeholder="Ajouter une tâche"
      />
    </form>
  );
};

Form.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Form;
