import {
    Link
  } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {logoutUser} from '../../store/user'
function Navbar(){
    const dispatch = useDispatch()
    const {user} = useSelector(state=> state.user)
    const handleLogout = ()=>{
        dispatch(logoutUser())
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
             <Link to="/" className="navbar-brand">ReactJS</Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Detail</Link>
                </li>
                {user ==="admin" ? 
                <li className="nav-item">
                    <Link to="/findUser" className="nav-link">Users</Link>
                </li>
                : <></>}
                </ul>
            </div>
            {user ==="admin" ? 
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0 mr-2" type="submit">Search</button>
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={(e)=> handleLogout()}>log out</button>
                </form>
                : 
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={(e)=> handleLogout()}>log out</button>
                </form>
            }
        </nav>
        </>
    );
}
export default Navbar 