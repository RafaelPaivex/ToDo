import { useEffect, useState } from 'react';
import { v4 as id } from 'uuid';

const TodasTarefas = ({lista, setLista}) => {

    const[check, setCheck] = useState(false)

    function realizarTarefa(){
        setCheck(() => {'checked'});
    }

    return (
        <div>
            <ul>
                {lista.map(trf => <li key={id()}><input type="checkbox" {...check ? 'checked' : ''} onClick={realizarTarefa}/>{trf.tarefa}</li>)}
            </ul>
        </div>
    );
}
 
export default TodasTarefas;