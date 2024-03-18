import React from 'react';
import { Flex, FlexBetween, FlexCenter } from '../layout';
import ModalFrame from './modalFrame';
import { Design1, Design2 } from '../logo';
import { Typography } from '../typography';
import { DesignButton } from '../button/designButton';
import { Button } from '../button';

const LoginModal = ({ 
    isvisible, 
    onClose, 
    openDashboard,
    openForgotPassword,
}) => {
    if (!isvisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    };

    const openForgotPasswordModal = () => {
        onClose();
        openForgotPassword();
    };

    const openDashboardModal = () => {
        onClose();
        openDashboard();
    };
    
    return (
        <FlexCenter className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur shadow-sm" id='wrapper' onClick={handleClose}>
            <ModalFrame onClose={onClose} title="USER ACCOUNT">
            
            {/* <h1 className="font-roman text-[35px] font-normal  text-color-brand-yellow2 ">LOGIN</h1> */}
            <div className='px-5 mb-3.5'>
                <Typography variant="h11" classname=" text-color-brand-yellow2 drop-shadow-3xl ">
                LOGIN
                </Typography></div>
            <div className=" px-5 text-left pb-5"> 
            
                <div className=" space-y-5"  action="#">
                    <div>  
                        <label for="email" className="block  mb-1.5">
                            <Typography variant="h12" classname=" text-color-brand-yellow2 drop-shadow-3xl ">
                                Email 
                            </Typography>
                            </label>
                            <Flex className=" relative w-[410px] h-[40px] ">
                            
                                <FlexBetween className="w-full h-[40px] absolute border-[#D2A42B] border-2 text-brand-gold bg-brand-blue">
                                    <Design1 />
                                    <Flex className="absolute justify-start items-center w-full h-[40px] z-50"><input type="email"
                                    name="email"
                                    id="email"
                                    className="outline-none bg-transparent items-center placeholder:text-textColor-brand-gold2 absolute flex w-full px-7 text-textColor-brand-gold2 h-[40px] "
                                    placeholder="example@domain.com "
                                    required/>
                                    </Flex>
                                    <Design2 />
                                </FlexBetween>
                            </Flex>
                    </div>
                    
                    <div className=''>
                    <label for="password" className="block mb-1.5">
                            <Typography variant="h12" classname=" text-color-brand-yellow2 drop-shadow-3xl ">
                            Password 
                            </Typography></label>
                            <Flex className=" relative w-[410px] h-[40px] ">
                                <FlexBetween className="w-full h-[40px] border-[#D2A42B] border-2 text-brand-gold bg-brand-blue absolute ">
                                    <Design1 />
                                    <Flex className="absolute justify-start items-center w-full h-[40px] z-50"><input type="password"
                                    name="password"
                                    id="password"
                                    className=" bg-transparent outline-none absolute flex w-[410px] px-7 text-textColor-brand-gold2 h-[40px]"
                                    placeholder=""
                                    required/></Flex>
                                    <Design2 />
                                </FlexBetween>
                            </Flex>
                    </div>
                            <Flex className="w-[410px] justify-end">
                            <FlexBetween className='w-auto'>
                            <Typography variant="h12" classname=" text-color-brand-yellow2 drop-shadow-3xl ">
                            Forgot Password?  
                            </Typography>
                            
                            {/* <Typography variant="h12" classname=" hover:underline cursor-pointer text-color-brand-yellow2 "
                             typoVariant="buttonLabel2"
                             onClick={() => 
                                setShowPassModal(true)}>
                                Reset 
                                </Typography> */}
                                <Button
                                className=" w-full"
                                typoVariant="h12"
                                onClick={() => {
                                    closeHighlightModal();
                                    setShowPassModal(!showPassModal);}}>
                               <Typography variant='h12' classname=" hover:underline cursor-pointer text-color-brand-yellow2 "> RESET</Typography>
                                </Button>
                                <PassModal isvisible={showPassModal} onClose={() => setShowPassModal(false)} />
                            
                            </FlexBetween>
                            
                            </Flex> 
                    {/* <button className=" bg-brand-yellow text-brand-gold w-full font-bold text-bn font-display2 p-2 justify-center " >ENTER</button> */}
                    
                            {/* <Flex className=" justify-center pb-2.5 w-[100%]">
                                <DesignButton
                                className=" w-full"
                                typoVariant="buttonLabel2"
                                onClick={() => setShowModal(true)}>
                                ENTER
                                </DesignButton>
                            </Flex> */}
                            <Flex className=" justify-center pb-2.5 w-[100%]">
                                <DesignButton
                                className=" w-full"
                                typoVariant="buttonLabel2"
                                onClick={() => {
                                    closeHighlightModal();
                                    setShowDashModal(!showDashModal);}}>
                                ENTER
                                </DesignButton>
                                <DashModal isvisible={showDashModal} onClose={() => setShowDashModal(false)} />
                                
                            </Flex>
                            

                  </div>
              </div>

            </ModalFrame>
        </FlexCenter>  
    );
};

export default LoginModal;
