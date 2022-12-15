import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="container">
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                    <Link className="m-5" to="/home"><img src='https://i.postimg.cc/7C859nMf/Traveyo.png' border='0' alt='Traveyo'/></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                   
                                    <Link className="m-5" to="/home">Home</Link>
                                </li>
                                <li class="nav-item">
                                    
                                    <Link className="m-5" to="/about">About</Link>
                                </li>
                                <li class="nav-item">
                                <Link className="m-5" to="/contact">Contact</Link>
                                </li>
                                <li class="nav-item dropdown">
                                <Link className="m-5" to="/anything">Anything</Link>
                                    
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    )
}

export default Navbar;