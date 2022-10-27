import { useEffect, useRef } from 'react';
import { v4 as id } from 'uuid';

const AddDetails = ({todo, setTodo, todoList, setTodoList}) => {

    useEffect(() =>{
        getLocalStorage()
    }, [])

    const inputRef = useRef();

    //Task value
    const todoHandler = (e) =>{
        setTodo(e.target.value);
    }

    //Add task to the list
    const addToList = () =>{
        setTodoList([...todoList,{id: id(), text: todo, status: false}])
        //Wipe input value
        setTodo('');
        //Wipe input
        inputRef.current.value = '';
        //Focus on input
        inputRef.current.focus();
    }

    //Add task to the list when Enter is pressed
    const sendTodoOnEnter = (e) =>{
        if(e.code === "Enter" || e.code === "NumpadEnter"){
            addToList();
        }
    }

    //LocalStorage
    useEffect(() =>{
        localStorage.setItem('tasks', JSON.stringify(todoList))
    },[todoList])

    const getLocalStorage = () =>{
        if(localStorage.getItem('tasks') === null){
            localStorage.setItem('tasks', JSON.stringify([]))
        }else{
            let localTaks = JSON.parse(localStorage.getItem('tasks'));
            setTodoList(localTaks);
        }
    }

    return (
        <div className="addDetails">
            <input ref={inputRef} type="text" placeholder="add details" onChange={todoHandler} onKeyUp={sendTodoOnEnter}/>
            <button onClick={addToList}>Add</button>
        </div>
    );
}
 
export default AddDetails;