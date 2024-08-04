import { useState } from 'react';

function TodoList() {


   // if array is empry then do not add to list
   
    

    const [todos, setTodos] = useState([]);

    const [todo, setTodo] = useState("");

    function handleAddTodo() {

        if (!todo) return;

        setTodos(todos=>[...todos, todo]);
        setTodo("");

        //set iput field to empty
        document.getElementById("todoiput").value = "";


    }
    function handleTodoChange(e) {

        const todo= e.target.value;
        setTodo (todo);
    }
    function handleRemove(todo_index) {   

        // delete the todo from the list

        setTodos(todos.filter((item,index) => index !== todo_index));
    }
    function handleUpIndex(todo_index) {

        if (todo_index === 0) return;
        const newTodos = [...todos];
        const temp = newTodos[todo_index];
        newTodos[todo_index] = newTodos[todo_index - 1];
        newTodos[todo_index - 1] = temp;
        setTodos(newTodos);



    }
    function handleDownIndex(todo_index) {
            
            if (todo_index === todos.length - 1) return;
            const newTodos = [...todos];
            const temp = newTodos[todo_index];
            newTodos[todo_index] = newTodos[todo_index + 1];
            newTodos[todo_index + 1] = temp;
            setTodos(newTodos);
        
    }


    const styles = {
        container: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        },
        title: {
            textAlign: 'center',
            color: '#333',
        },
        inputBox: {
            width: '66%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
        },
        addButton: {
            width: '25%',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginLeft: '5%',
        },
        listSpace: {
            listStyleType: 'none',
            padding: 0,
        },
        listItem: {
            backgroundColor: '#f9f9f9',
            margin: '10px 0',
            padding: '15px',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        button: {
            marginLeft: '10px',
            padding: '5px 10px',
            fontSize: '14px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        removeButton: {
            backgroundColor: '#f44336',
            color: 'white',
        },
        upButton: {
            backgroundColor: '#2196F3',
            color: 'white',
        },
        downButton: {
            backgroundColor: '#ff9800',
            color: 'white',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Todo List</h1>
            <input 
                style={styles.inputBox} 
                type="text" 
                id="todoiput" 
                placeholder="Enter todo" 
                onChange={handleTodoChange}
            />
            <button style={styles.addButton} onClick={handleAddTodo}>Add</button>
            <ul style={styles.listSpace}>
                {todos.map((todo, index) => (
                    <li style={styles.listItem} key={index}>
                        <span>{todo}</span>
                        <div>
                            <button style={{...styles.button, ...styles.removeButton}} onClick={() => handleRemove(index)}>Remove</button>
                            <button style={{...styles.button, ...styles.upButton}} onClick={() => handleUpIndex(index)}>⬆️</button>
                            <button style={{...styles.button, ...styles.downButton}} onClick={() => handleDownIndex(index)}>⬇️</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;