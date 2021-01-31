import { useState } from 'react';

import './app.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: '1', text: 'Fiish the course' },
    { id: '2', text: 'Learn all about the main course' },
    { id: '3', text: 'Help other student in the course Q&A' },
  ]);

  // courseGoal.push(courseGoals);

  const AddInputHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));

    setCourseGoals((previousGoal) => previousGoal.concat(newGoal));
  };

  const onClick = () => {
    console.log('Click');
  };
  return (
    <div className='container'>
      <h1>Course Goals</h1>
      <NewGoal onAddGoal={AddInputHandler} />
      <GoalList course={courseGoals} onClick={onClick} />
    </div>
  );
}

export default App;
