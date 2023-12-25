import React, { useState } from 'react';

const EditInput = ({ todoId, handleEdit, setEditedTodo }) => {
    const [editTitle, setEditTitle] = useState('')

    const handleEditClick = () => {
        handleEdit(todoId, editTitle);
        setEditTitle('')
        setEditedTodo({ id: todoId, title: editTitle })
    }

    return (
        <div className={'edit-wrapper'}>
            <input
                className={'todoInput'}
                onChange={(e) => setEditTitle(e.target.value)}
                value={editTitle}
                type="text"
            />
            <button className={'todoBtn'} onClick={handleEditClick}>
                OK
            </button>
        </div>
    )
}

export default EditInput;