import React from 'react';
import {FiSend, FiVoicemail, FiStar} from 'react-icons/fi';

import './styles.css';

export default function Chamados() {
    return(
        <div className="container">
            <div className="menu">
                <div className="new">
                    <button className="button">Criar novo</button>
                </div>
                <div className="menuList">
                    <ul>
                        <li><a href=""><FiSend size={15}/> Enviados</a><span className="bg-green">5</span></li>
                        <li><a href=""><FiVoicemail size={15}/> Aguardando Resposta</a><span className="bg-blue">115</span></li>
                        <li><a href=""><FiStar size={15}/> Finalizados</a><span className="bg-red">115</span></li>
                    </ul>
                </div>
            </div>
            <div className="chamado">
                wendell
            </div>
            <div className="reader">
                wendell
            </div>
        </div>
    );
}