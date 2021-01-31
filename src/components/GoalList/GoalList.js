const GoalList = ({ onClick, course }) => {
  return (
    <div>
      <ul className='goal-list'>
        {course.map((crs) => {
          return <li key={crs.id}>{crs.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default GoalList;
