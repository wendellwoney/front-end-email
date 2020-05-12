import React from  'react';
import { FiMenu, FiUsers, FiPower, FiUser } from 'react-icons/fi'

import './styles.css';
import { menuTop } from '../../assets/js/menuTop';

import Logo from '../../assets/img/logo.png';

export default function Header() {
    return (
        <div className="header-container">
            <header>
                <div className="left">
                    <img src={Logo} alt="Assistente de chamados"/>
                    <FiMenu className="menu-icon" size={18} color="#72777a"/>
                </div>
                <div className="right">
                    <div className="avatar" onClick={menuTop}>
                        <FiUsers size = {18} color="#72777a"/>
                    </div>
                    <span>Wendell Woney</span>
                </div>
            </header>
            <div className="menuTop">
                    <ul>
                        <li><a href="#"><FiUser/> Perfil</a></li>
                        <hr/>
                        <li><a href="#"><FiPower/> Sair do sistema</a></li>
                    </ul>
            </div>
        </div>
    );
}