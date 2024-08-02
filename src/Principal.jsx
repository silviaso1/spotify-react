import React from 'react';
import './styles/principal.css';
import deepfocus from './imgs/deepFocus.png'

function Principal(){
    return(
        <div class= "principal">
           <div class="principalDentro">
           <section class="topo">
                <div>
                    <p>botao</p>
                </div>
                <div class="rightSide">
                    <div class="premium">
                        <p>adquiria o premium</p>
                    </div>
                    <div class="profile">
                        <img src="" alt="perfil" />
                    </div>
                </div>
           </section>

           <section class="playlistTopo">
            <img src={deepfocus} alt="deepfocus" />
            <h1>Melhores musicas para manter o foco</h1>
            <button>aaaa</button>
           </section>
           </div>
        </div>
    );
}

export default Principal;
