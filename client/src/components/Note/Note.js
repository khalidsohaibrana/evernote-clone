import React from 'react';
import './Note.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArchive} from '@fortawesome/free-solid-svg-icons'
function Note(props) {
    return (
        <div className='note'>
            <div className='note__header'>
                <div className='note__header-date'>
                    last edited on may 11, 2023
                </div>
                <div className='note__header-action-btn'>
                    <FontAwesomeIcon icon={faArchive}></FontAwesomeIcon>
                </div>
            </div>
            <div className='note__body'>
                <div className='note__body-head'>
                    <input placeholder='Title' />
                </div>
                <div className='note__body-content'>
                    <textarea placeholder='start writing' />
                </div>
            </div>
        </div>
    );
}

export default Note;