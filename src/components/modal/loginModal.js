import React from 'react';
import { FlexCenter, FlexColumn } from '../layout';
import { Xmark } from '../logo';
import ModalFrame from './modalFrame';

const LoginModal = ({ isvisible, onClose, children }) => {
    if ( !isvisible ) return null;
    const handleClose = (e) => {
        if( e.target.id === 'wrapper' ) onClose();
    }
    return (
        <FlexCenter className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm" id='wrapper' onClick={handleClose}>
            <ModalFrame onClose={onClose} title="USER ACCOUNT"/>
        </FlexCenter>  
    );
}
export default LoginModal;