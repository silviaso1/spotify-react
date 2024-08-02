import React from 'react';
import '../styles/principal.css';
import deepfocus from '../imgs/deepFocus.png'
import Likes from '../imgs/likes.png'

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
            <div>
            <img src={deepfocus} alt="deepfocus" />
            <h1>Melhores musicas para manter o foco</h1>
            </div>
            <div class="botoes">
                <button>Play</button>
                <button>Seguir</button>
            </div>
           </section>

           <section class="topoSugerido">
            <div class="musicasSugestao">
                <img src={Likes} alt="" />
                <p>Músicas curtidas</p>
            </div>
            <div class="musicasSugestao"><img src={Likes} alt="" /></div>
            <div class="musicasSugestao">
            <img src={Likes} alt="" />
            </div>
            <div class="musicasSugestao">
            <img src={Likes} alt="" />
            </div>
            <div class="musicasSugestao">
            <img src={Likes} alt="" />
            </div>
            <div class="musicasSugestao">
            <img src={Likes} alt="" />
            </div>
            <div class="musicasSugestao">
            <img src={Likes} alt="" />
            </div>
            <div class="musicasSugestao">
            <img src={Likes} alt="" />
            </div>
           </section>
           </div>
        </div>
    );
}

export default Principal;
