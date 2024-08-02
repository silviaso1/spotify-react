import React from 'react';
import '../styles/footer.css';
import Drain from '../imgs/theDrain.png';
import Shuffle from '../imgs/shuffle.png';
import Esq from '../imgs/VectorEsq.png';
import Dir from '../imgs/VectorDir.png';
import Play from '../imgs/play.png';
import Group from '../imgs/Group.png';
import Like from '../imgs/Vector.png';
import Player from '../imgs/player.png';
import Micro from '../imgs/microfone.png';
import Laptop from '../imgs/laptop.png';
import Speaker from '../imgs/speaker.png';
import Volume from '../imgs/volume.png';


function Footer(){
    return(
        <div class="footer">
            <div class="musicaSide">
                <img src={Drain} alt="Musica" />
                <div class="name">
                <h3>THE DRAIN</h3>
                <p>Bad Omens, HEALTH, SWARM</p>
                </div>
                <img src={Like} alt="" id='like' />
            </div>
            <div class="player">
                <div class="playerr">
                    <img src={Shuffle} alt="" id='shuffle'/>
                    <img src={Esq} alt="" class="troca"/>
                    <img src={Play} alt="" id='play'/>
                    <img src={Dir} alt="" class="troca"/>
                    <img src={Group} alt=""id='group' />
                </div>
                <div class="tocando">
                    <p>0:00</p>
                    <img src={Player} alt="" />
                    <p>2:42</p>
                </div>
            </div>
            <div class="side">
                <img src={Micro} alt="" />
                <img src={Laptop} alt="" />
                <img src={Speaker} alt="" />
                <img src={Volume} alt="" id='volume' />
            </div>
        </div>
    );
}
export default Footer;