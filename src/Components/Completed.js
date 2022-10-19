const Completed = () => {

    function getStorage(){
        var storage = localStorage.getItem('tarefas');
        console.log(storage)
    }

    return (
        <>
            <h1>Completed</h1>
            <button onClick={getStorage}>Click</button>
        </>
    );
}
 
export default Completed;