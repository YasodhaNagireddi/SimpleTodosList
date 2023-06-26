// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem

  const deleteTodoItem = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item-container">
      <p className="todo-item-title">{title}</p>

      <button
        type="button"
        className="todo-item-del-btn"
        onClick={deleteTodoItem}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
