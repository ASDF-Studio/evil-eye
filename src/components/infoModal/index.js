import React from 'react';
import { FlexCenter, FlexColumn } from '../layout';

const InfoModal = ({ isvisible, onClose, children }) => {
    if ( !isvisible ) return null;
    const handleClose = (e) => {
        if( e.target.id === 'wrapper' ) onClose();
    }
    return (
        <FlexCenter className="z-50 fixed right-10 top-24 bg-black bg-opacity-25 backdrop-blur-sm shadow-sm" id='wrapper' onClick={handleClose}>
            <FlexColumn className='bg-backgroundColor-brand-blue-80 border border-amber-300'>
                <button className='text-textColor-brand-yellow text-xl place-self-end pr-4 pt-3' onClick={() => onClose()}>X</button>
                <div className='text-textColor-brand-yellow w-auto h-auto pl-5 rounded '>
                    {children}
                </div>
            </FlexColumn>
        </FlexCenter>  
    );
}
export default InfoModal;