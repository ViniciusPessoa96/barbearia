import React from 'react';
import '../../../bootstrap/css/bootstrap.min.css';
import './contentbox.css'

function Contentbox(){
    return (
        <div class='container jumbotron-wrap'>
            <div class="jumbotron jumbotron-flex video-container">
            <h1>Bem vindo a barbearia Ashicortes!</h1>
            <br></br>
            <br></br>
            <h2>O que você deseja fazer hoje?</h2>
            <br></br>
            <p><a class="btn btn-lg btn-grey" id='btn-agendar' href="#" role="button">Marcar atendimento</a></p>
            </div>
        </div>
    );
}

export default Contentbox;