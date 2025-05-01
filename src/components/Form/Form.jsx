import { GrAdd } from 'react-icons/gr';
import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit, mode = 'add' }) => {
  const handleSubmit = event => {
    event.preventDefault();
    //value-значение с импута
    const value = event.target.elements.search.value;

    if (!value.trim()) {
      alert('Entre some on text');
      return;
    }

    onSubmit(value);
    event.target.reset();
  };

  // вибір іконки
  const Icon = mode === 'search' ? FiSearch : GrAdd;

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <Icon size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
