import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({text, todoList, setTodoList, todos, filter}) => {

    //Change task state
    const changeStatus = () =>{
        setTodoList(todoList.map((item) => {
            if(item.id === todos.id){
                return{
                    ...item, status: !item.status
                }
            }
            return item;
        }))
    }

    //Delete task
    const RemoveTask = () =>{
        setTodoList(todoList.filter(item => item.id !== todos.id));
    }

    //If page = false show page to remove tasks
    let page = '';

    if(filter !== 'completed'){
        page = true;
    }else{
        page = false;
    }

    return (
        <>
            {page ? <p className={todos.status ? 'done' : ''}><input type="checkbox" defaultChecked={todos.status} onClick={changeStatus}/>{text}</p>
            :
                <div className="removePage">
                    <p className={todos.status ? 'done' : ''}><input type="checkbox" defaultChecked={todos.status} onClick={changeStatus}/>{text}</p>
                    <FontAwesomeIcon icon={faTrash} onClick={RemoveTask} color="#BDBDBD"/>
                </div>
            }
        </>
    );
}
 
export default Todo;