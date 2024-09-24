import React, { useState } from 'react';
import './style2.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, remove, editItem } from './Redux/ToDoReducer';

const ToDo = () => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);

  const handleAdd = () => {
    if (input !== '') {
      dispatch(addItem(input));
      setInput("");
    }
  };

  const removeItem = (item) => {
    dispatch(remove(item));
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    if (editText !== '') {
      dispatch(editItem({ id: editId, newText: editText }));
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <div className='label'>
      <label>
        <input
          type="text"
          value={input}
          placeholder='please add new tasks'
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn' onClick={handleAdd}>Create</button>
      </label>

      <div className='list'>
        <ol>
          {todos.map((todo, index) => (
            <li className='content' key={index}>
              {editId === index ? ( 
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)} 
                  />
                  <button onClick={saveEdit}>Save</button> 
                </>
              ) : (
                <>
                  {index + 1}. {todo}
                  <div className='btnAll'>
                  <button className='edtBtn' onClick={() => handleEdit(index, todo)}>Edit</button> 
                  <button className='dltBtn' onClick={() => removeItem(todo)}>Delete</button>
                </div>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDo;
