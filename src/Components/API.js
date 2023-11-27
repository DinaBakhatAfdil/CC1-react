import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=20`)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="App  border border-secondary border-5 rounded-3 w-50 h-75 container ">
      <h1 className='text-info '>Pagination</h1>
     
        {todos.map(todo => (
          <li  type="none"  key={todo.id}>{todo.title}</li>
        ))}
     <nbsp></nbsp>
     <nbsp></nbsp>
      <button className='btn bg-danger   mt-4 mb-4' onClick={handlePreviousPage}>Previous</button>  
      <nbsp></nbsp>
      <nbsp></nbsp>
      <nbsp></nbsp>
      <button className='btn  mb-4  mt-4 bg-success'  onClick={handleNextPage}>next</button>
    </div>
  );
}

export default Api;
