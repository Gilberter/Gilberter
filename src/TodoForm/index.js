import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'


function TodoForm() {
    const [newTodoValue, SetNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        SetNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form className="Conteiner-Form" onSubmit={onSubmit}>
            <label className="Label-edit">
                !!Escribe tu TODo!!
            </label>
            <textarea className="text-conteiner"
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe Tu Tarea A Realizar"
            />
            <div className="div-conteiner">
                    <button className="button-edit" type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button className="button-edit" type="submit">
                    Añadir
                </button>
            </div>
    
        </form>
    );
}

export { TodoForm };