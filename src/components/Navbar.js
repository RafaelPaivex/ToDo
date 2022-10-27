import { useState } from "react";

const Navbar = ({setFilter}) => {

    const[all, setAll] = useState(true);
    const[active, setActive] = useState(false);
    const[completed, setCompleted] = useState(false);

    const filterAll = () =>{
        setFilter('all');
        setAll(true);
        setActive(false);
        setCompleted(false);
    }

    const filterActive = () =>{
        setFilter('active');
        setAll(false);
        setActive(true);
        setCompleted(false);
    }

    const filterCompleted = () =>{
        setFilter('completed');
        setAll(false);
        setActive(false);
        setCompleted(true);
    }

    return (
        <>
            <nav>
                <ul>
                    <li onClick={filterAll}><p>All</p></li>
                    <li onClick={filterActive}><p>Active</p></li>
                    <li onClick={filterCompleted}><p>Completed</p></li>
                </ul>
            </nav>
            <div className="separators">
                <ul>
                    <li><div className={all ? 'lineAll active' : 'lineAll'}></div></li>
                    <li><div className={active ? 'lineActive active' : 'lineActive'}></div></li>
                    <li><div className={completed ? 'lineComplete active' : 'lineComplete'}></div></li>
                </ul>
            </div>
            <div className="divLine">
                <div className="line"></div>
            </div>
        </>
    );
}
 
export default Navbar;