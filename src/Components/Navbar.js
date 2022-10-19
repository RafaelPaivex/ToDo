import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className="navList">
                <ul>
                    <Link to={"/"}><li style={{marginRight: '20vh'}}>All</li></Link>
                    <Link to={"/active"}><li style={{marginRight: '20vh'}}>Active</li></Link>
                    <Link to={"/completed"}><li>Completed</li></Link>
                </ul>
            </div>
            <div className="divLine">
                <div className="line"></div>
            </div>
        </>
     );
}
 
export default Navbar;