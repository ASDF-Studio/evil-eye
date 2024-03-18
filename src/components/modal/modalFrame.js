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
            className=" w-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur shadow-sm z-50" 
            id='wrapper' 
            onClick={onClose}
        >
            <FlexColumn className='bg-backgroundColor-brand-blue-95 bg-opacity-95 w-[450px] border-2 border-color-brand-yellow2  shadow-buttonShadow3'>
                <FlexBetween className=" w-full h-[40px] gap-1 border-2 border-color-brand-yellow2">
                    <Design1 />
                        <Typography variant="title" classname="w-[340px] ml-10 flex justify-center items-center h-full text-color-brand-yellow2 ">
                            {title}
                        </Typography>
                        <FlexCenter>
                            <button className='text-textColor-brand-yellow place-self-end w-[28px]' onClick={() => onClose()}>
                                <Xmark/>
                            </button>
                        </FlexCenter>
                    <Design2 />
                </FlexBetween>
                <div className=' text-brand-yellow pt-4 w-[450px] h-auto rounded '>
                    {children}
                </div>
            </FlexColumn>
        </FlexCenter>  
    );
}
export default ModalFrame;
