import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faAngleDown, faPlus, faStar} from '@fortawesome/free-solid-svg-icons'
import './SideNavbar.scss';
import { Link } from 'react-router-dom';
import { postRequest } from '../../utils/apiRequests';
import { BASE_URL, CREATE_NOTE } from '../../utils/apiEndpoints';
function SideNavbar(props) {

    const handleCreateNote = async () => {
            //Api request
            // const response = await postRequest(`${BASE_URL},${CREATE_NOTE}`)
            // console.log(response);
            alert('note created');
        }
    return (
        <div className='sidenavbar'>
            <div className='sidenavbar-top'>
                <div className=' sidenavbar-top__profile'>
                    <div className='profile-icon'>
                        A
                    </div>
                    <div className='profile-title'>
                        khalid sohaib
                        <FontAwesomeIcon icon={faAngleDown} className='icon'/>
                    </div>
                </div>
                <div className='sidenavbar-to__search'>
                    <div className='search-block'>
                        <FontAwesomeIcon  icon={faSearch} />
                        <input style={{border:"none", outline: "none", color: 'white'}} className='input' placeholder='search' ></input>

                    </div>
                </div>
                <div className='sidebarnav-top__create-note'>
                    <div className='create-note-btn'onClick={handleCreateNote} >
                        <FontAwesomeIcon icon={faPlus} />
                        <div className='title' >Add Note</div>
                    </div>

                </div>
                <div className='sidebarnav-top__menu-item'>
                    <ul>
                        <li >
                            <Link to={'/all-notes'}>
                                <FontAwesomeIcon className='icon' icon={faStar} />
                                All Notes
                            </Link>
                        </li>
                        <li >
                            <Link to={'/dummy1'}>
                                <FontAwesomeIcon className='icon' icon={faStar} />
                                Dummy
                            </Link>
                        </li>
                        <li >
                            <Link to={'/trash'}>
                                <FontAwesomeIcon className='icon' icon={faStar} />
                                Trash
                            </Link>
                        </li>
                        <li >
                            <Link to={'/dummy2'}>
                                <FontAwesomeIcon className='icon' icon={faStar} />
                                Dummy
                            </Link>
                        </li>
                        
                    </ul>
                </div>

            </div>
            
        </div>
    );
}

export default SideNavbar;