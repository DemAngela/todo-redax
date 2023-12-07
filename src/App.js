import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, editTodo, getTodos} from "./redux/action/todoAction";
import EditInput from "./Components/EditInput";

function App() {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState({})
    const todoArray = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(getTodos(todos))
    }, []);

    const handleAddTodo = () => {
        const data = {id: todoArray.length + 1, title: todo.title, complete: false}
        dispatch(addTodo(data))
        setTodo({})
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleEdit = (todo) => {
        dispatch(editTodo(todo))
    }


    console.log(todoArray)
  return (
    <>
        <input type="text"
               value={todo.title || ''}
            onChange={(e) => setTodo({...todo, title: e.target.value})}
        />
        <button onClick={handleAddTodo}>Add</button>
        <EditInput />
        {
            todoArray.map(todo =>
            <div key={todo.id}>
                <h3>{todo.title}</h3>
                {/*<p>{todo.complete ? 'Completed' : 'Not Completed'}</p>*/}
                <input type="checkbox" checked={todo.complete}/>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            </div>
            )
        }
    </>
  );
}

export default App;

const todos = [
    {
      id: 1,
      title: 'Buy Milk',
      complete: false
    },
    {
        id: 2,
        title: 'Buy eggs',
        complete: false
    },
    {
        id: 3,
        title: 'Buy Milk',
        complete: false
    },
]
