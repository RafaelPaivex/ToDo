import { useEffect, useState } from 'react';

//Css
import './App.css';

//Components
import Navbar from './components/Navbar';
import AddDetails from './components/AddDetails';
import TodoList from './components/TodoList';

const App = () => {

    const[todo,setTodo] = useState('');
    const[todoList, setTodoList] = useState([]);
    const[filter, setFilter] = useState('all');
    const[filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() =>{

        const filterHandler = () =>{
            switch (filter) {
                case 'completed':
                    setFilteredTodos(todoList.filter(todo => todo.status === true));
                break;
                case 'active':
                    setFilteredTodos(todoList.filter(todo => todo.status === false));
                break;
            
                default:
                    setFilteredTodos(todoList);
                break;
            }
        }

        filterHandler();
    }, [todoList, filter])

    return (
        <>
            <h1 className="title">#todo</h1>
            <Navbar setFilter={setFilter} filter={filter}/>
            <AddDetails todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
            <TodoList todoList={todoList} setTodoList={setTodoList} filter={filter} setFilter={setFilter} filteredTodos={filteredTodos}/>
        </>
    )
}
 
export default App;