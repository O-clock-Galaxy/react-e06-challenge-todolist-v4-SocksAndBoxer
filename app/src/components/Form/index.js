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
class Form extends React.Component {

  handleSubmit = (evt) => {
    // bloque le comportement par défaut
    evt.preventDefault();
    // j'execute onAddTask (fonction provenant de App)
    this.props.onAddTask();
  };

  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.onChangeInput(value);
  };

  render() {
    return (
      <form
        id="form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          id="todo-input"
          placeholder="Ajouter une tâche"
          value={this.props.inputValue}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default Form;
