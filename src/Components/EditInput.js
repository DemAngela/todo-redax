import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const EditInput = () => {
   const [editTitle, setEditTitle] = useState('')
    const todo = useSelector(s => s.editTodo)
    const dispatch = useDispatch()
    return (
        <div>
            <input
                onChange={(e) => setEditTitle(e.target.value)}
                defaultValue={todo.title}
                type="text"/>
            <button>OK</button>
        </div>
    );
};

export default EditInput;