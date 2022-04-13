import React from 'react';
// import './TodoItem.css'; 
import './CreateTodoButton.css';

function TodoList(props) {
  return (
    <section> 
        <ul >
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };