import {
    Link
  } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {logoutUser} from '../../store/user'
function Navbar(){
    const dispatch = useDispatch()
    const handleLogout = ()=>{
        dispatch(logoutUser())
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
             <Link to="/" className="navbar-brand">ReactJS</Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Detail</Link>
                </li>
                <li className="nav-item">
                    <Link to="/findUser" className="nav-link">Find User</Link>
                </li>
                </ul>
            </div>
            <span className="navbar-text">
                <button onClick={(e)=> handleLogout()}>log out</button>
            </span>
        </nav>
    );
}
export default Navbar 