import { useRef, useState, useEffect } from "react";
import { v4 as id } from 'uuid';

const CriarTarefa = () => {

    const[tarefa, setTarefa] = useState('')
    const[listaTarefa, setListaTarefa] = useState([]);
    const tarefaRef = useRef();

    function criarTarefa(e){
        setTarefa({...tarefa, id: id(), tarefa: e.target.value, estado: 'Realizada'});
    }

    function adicionarTarefa(){

        tarefaRef.current.focus();

        tarefaRef.current.value = '';

        if(tarefa === '')return

        setListaTarefa((oldLista) => [...oldLista, tarefa]);
        
        setTarefa(() => {return ''});

    }

    useEffect(() =>{
        
        if(localStorage.getItem('tarefas') !== null){
            setListaTarefa(JSON.parse(localStorage.getItem('tarefas')))
        }

    },[])

    useEffect(() =>{
        localStorage.setItem('tarefas', JSON.stringify(listaTarefa))
    }, [listaTarefa]);


    return(
        <>
            <div className="addTarefas">
                <input type="text" ref={tarefaRef} placeholder="add details" onChange={criarTarefa}/>
                <button onClick={adicionarTarefa}>Add</button>
            </div>
            <div className="tarefas">
                <ul>
                    {listaTarefa.map(trf => <li key={id()}>{trf.tarefa}</li>)}
                </ul>
            </div>
        </>
    )
}
 
export default CriarTarefa;