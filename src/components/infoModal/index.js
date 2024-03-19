import React, { useEffect, useState } from 'react';
import { FlexCenter, FlexColumn } from '../layout';
import { Xmark } from '../logo';

const InfoModal = ({ isvisible, onClose, children }) => {
    const [modalVisible, setModalVisible] = useState(isvisible);

    useEffect(() => {
        if (isvisible) {
            setModalVisible(true);
        } else {
            setTimeout(() => {
                setModalVisible(false);
            }, 100);
        }
    }, [isvisible]);

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') {
            onClose();
        }
    };

    return (
        <FlexCenter className={`z-50 fixed right-10 top-24 bg-black bg-opacity-25 backdrop-blur-sm shadow-sm transition-transform ${modalVisible ? 'transform translate-x-0 bounce' : 'transform translate-x-[120%] closeAnimation'}`} id='wrapper' onClick={handleClose}>
            <FlexColumn className='bg-backgroundColor-brand-blue-80 border border-color-brand-yellow2 shadow-buttonShadow3 justify-between'>
                <button className='text-textColor-brand-yellow text-xl place-self-end pr-4 pt-3' onClick={() => onClose()}>
                    <Xmark />
                </button>
                <div className='text-textColor-brand-yellow w-auto h-auto pl-5 rounded '>
                    {children}
                </div>
            </FlexColumn>
        </FlexCenter>  
    );
};

export default InfoModal;
