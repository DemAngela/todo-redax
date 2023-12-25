import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, editTodo, getTodos, updateTodos} from "../redux/action/todoAction";
import EditInput from "../Components/EditInput";
import {useForm} from "react-hook-form";


const TodoPage = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, setValue, watch } = useForm();
    const todoArray = useSelector((state) => state.todos);
    const [editedTodo, setEditedTodo] = useState(null);
    const todos = [
        {
            id: 1,
            title: 'Buy Milk',
            complete: false,
        },
        {
            id: 2,
            title: 'Buy eggs',
            complete: false,
        },
        {
            id: 3,
            title: 'Buy Milk',
            complete: false,
        },
        {
            id: 4,
            title: 'Buy Milk',
            complete: false,
        },
    ]

    useEffect(() => {
        dispatch(getTodos(todos))
    }, [dispatch])

    const handleAddTodo = (data) => {
        const newTodo = { id: todoArray.length + 1, title: data.title, complete: false }
        dispatch(addTodo(newTodo))
        reset()
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    };

    const handleEdit = (id, newTitle) => {
        dispatch(editTodo(id, newTitle))
        setEditedTodo(null)
    }

    const handleCheckboxChange = (id, e) => {
        const updatedTodos = todoArray.map(todo => {
            if (todo.id === id) {
                return { ...todo, complete: e.target.checked }
            }
            return todo;
        });
        dispatch(updateTodos(id, e))
    };


    return (
        <section className={'todo'}>
            <div className={'container'}>
                <div className={'box'}>
                    <form onSubmit={handleSubmit(handleAddTodo)} className={'card-wrapper'}>
                        <input
                            type="text"
                            className={'todoInput'}
                            {...register('title', { required: true })}
                            placeholder="Add a new todo"
                        />
                        <button type="submit" className={'todoBtn'}>
                            Add
                        </button>
                    </form>
                    <div className="row">
                        {todoArray.map((todo) => (
                            <div className={'col-4'} key={todo.id}>
                                <div className="card">
                                    <div className={'card-title'}>
                                        <h3>{editedTodo && editedTodo.id === todo.id ? editedTodo.title : todo.title}</h3>
                                        <input
                                            type="checkbox"
                                            checked={todo.complete}
                                            onChange={(e) => handleCheckboxChange(todo.id, e)}
                                            {...register(`complete_${todo.id}`)}
                                        />
                                    </div>
                                    <div className={'card-inner'}>
                                        <button onClick={() => handleDelete(todo.id)} className={'todoBtn'}>
                                            Delete
                                        </button>
                                        <form onSubmit={handleSubmit((data) => handleEdit(todo.id, data[`editedTitle_${todo.id}`]))}>
                                            <EditInput
                                                todoId={todo.id}
                                                handleEdit={(id, newTitle) => handleEdit(id, newTitle)}
                                                setEditedTodo={setEditedTodo}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TodoPage;

