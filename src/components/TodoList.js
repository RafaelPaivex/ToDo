import Todo from './Todo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({todoList, setTodoList, filteredTodos, filter}) => {

    //Add button remove all
    let setButton = '';

    if(filter === 'completed'){
        setButton = true;
    }else{
        setButton = false;
    }

    const removeAll = () =>{
        setTodoList(todoList.filter(el => el.status !== true));
    }

    return (
        <>
            <div className="containerTarefas">
                <div className="listaTarefas">
                {filteredTodos.map((todos =>(
                    <Todo key={todos.id} text={todos.text} todoList={todoList} setTodoList={setTodoList} todos={todos} filter={filter}/>
                )))}
                </div>
            </div>
            <div className='divButton'>
                <div>
                    {setButton ? <button onClick={removeAll}><FontAwesomeIcon icon={faTrash}/> Remove all</button> : ''}
                </div>
            </div>
        </>
    );
}
 
export default TodoList;