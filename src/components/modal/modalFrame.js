import React from 'react';
import { Flex, FlexBetween, FlexCenter, FlexColumn } from '../layout';
import { Design1, Design2, Xmark } from '../logo';
import { Typography } from '../typography';

const ModalFrame = ({
    onClose, 
    children, 
    title 
}) => {
    return (
        <FlexCenter 
            className=" w-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" 
            id='wrapper' 
            onClick={onClose}
        >
            <FlexColumn className='bg-backgroundColor-brand-blue-80 w-[450px] border-2 border-color-brand-yellow2'>
                <FlexBetween className="w-full gap-1">
                    <Design1 />
                        <Typography variant="title" classname="w-full h-full text-color-brand-yellow2 ">
                            {title}
                        </Typography>
                        <FlexCenter>
                            <button className='text-textColor-brand-yellow place-self-end w-[28px]' onClick={() => onClose()}>
                                <Xmark/>
                            </button>
                        </FlexCenter>
                    <Design2 />
                </FlexBetween>
                <div className=' text-brand-yellow w-[410px] h-auto rounded '>
                    {children}
                </div>
            </FlexColumn>
        </FlexCenter>  
    );
}
export default ModalFrame;