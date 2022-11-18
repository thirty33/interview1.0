import React from 'react';
import '@styles/Header.css'

function HeaderComponent({  onClick }) {
    return (
        <div className='header-container'>
            <h1 className='header-title'>Nueva tabla</h1>
            <button className='header-action-button' type='button' onClick={onClick} >GUARDAR</button>
        </div>
    );
}

export default HeaderComponent;