import React from 'react';
import '../../bootstrap/css/bootstrap.min.css';
import './header.css'


function Header(){
    return (
            <nav class='navbar navstyle'>

                <div>

                <div>Barbearia Ashcortes</div>    
                <ul class='navlist'>
                <li>
                    <a href="">Cliente</a>
                </li>
                <li>
                    <a href="">Administrador</a>
                </li>
                </ul>
                </div>
            </nav>
    );
}

export default Header;