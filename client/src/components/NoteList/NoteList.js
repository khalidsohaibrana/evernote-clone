import React from 'react';
import './NoteList.scss';

function NoteList(props) {
    const {title} = props;

    return (
        <div className='note-list' >
            <div className='note-list__header'>
                <div className='note-list__header-title'>
                    <h1>{title}</h1>
                </div>
                <div className='note-list__sub-header'>
                    <div className='note-count' >
                        <h4>2 notes</h4>
                    </div>

                </div>
            </div>
            <div className='note-list__body'>
                <div className='note-card'>
                    <div className='note-card__head' >
                        <div className='note-card__title'>
                            Note 1
                        </div>
                        <div className='note-card_desc' >
                            Some content
                        </div>
                    </div>
                    <div className='note-card__date'>
                        12-12-2023
                    </div>
                </div>
                <div className='note-card'>
                    <div className='note-card__head' >
                        <div className='note-card__title'>
                            Note 1
                        </div>
                        <div className='note-card_desc' >
                            Some content
                        </div>
                    </div>
                    <div className='note-card__date'>
                        12-12-2023
                    </div>
                </div>
                <div className='note-card'>
                    <div className='note-card__head' >
                        <div className='note-card__title'>
                            Note 1
                        </div>
                        <div className='note-card_desc' >
                            Some content
                        </div>
                    </div>
                    <div className='note-card__date'>
                        12-12-2023
                    </div>
                </div>
              
            </div>
            
        </div>
    );
}

export default NoteList;