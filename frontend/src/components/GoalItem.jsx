
function GoalItem({goal}) {

  return (
    <div className="goal">
    <div>{new Date(goal.goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.goal.text}</h2>
    </div>
  )
}

export default GoalItem;