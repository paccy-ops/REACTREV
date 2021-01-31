import './NewGoal.css';
import { useState } from 'react';
const NewGoal = ({ onAddGoal }) => {
  const [enteredText, setEnteredText] = useState('');
  const AddInputHandler = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Math.floor(Math.random() * 1000).toString(),
      text: enteredText,
    };
    onAddGoal(newGoal);
    setEnteredText('');
  };
  const textChangeHandler = (e) => {
    setEnteredText(e.target.value);
  };

  return (
    <form className='new-goal' onSubmit={AddInputHandler}>
      <input
        type='text'
        value={enteredText}
        placeholder='new goal'
        onChange={textChangeHandler}
      />
      <button type='submit'>AddGoal</button>
    </form>
  );
};

export default NewGoal;
