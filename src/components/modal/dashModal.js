import React from 'react';
import { Flex, FlexBetween, FlexCenter, FlexColumn } from '../layout';
import ModalFrame2 from './modalFrame2';
import { Design1, Design2, Pen, Xmark } from '../logo';
import { DesignButton2 } from '../button/designButton2';
import { Typography } from '../typography';

const DashModal = ({ isvisible, onClose, children }) => {
    if ( !isvisible ) return null;
    const handleClose = (e) => {
        if( e.target.id === 'wrapper' ) onClose();
    }
    return (
        <FlexCenter className="z-50 fixed top-[50%] left-[50%] bg-black bg-opacity-25 backdrop-blur-sm shadow-sm" id='wrapper' onClick={handleClose}>
            <ModalFrame2 onClose={onClose} title="DASHBOARD">
            <div className=" flex gap-0 w-auto divide-[#FFCE70] divide-x-2">
                <div className=" py-5 px-5">
                <div className=''>
                <Typography variant="h11" classname=" text-color-brand-yellow2 drop-shadow-3xl ">
                    YOUR INFO
                </Typography>
                </div>

            <div className='pt-3'>
                <Typography variant="h12" classname=" text-color-brand-yellow2  pt-5">
                    Update your  settings here.
                </Typography>
            </div>

        <div className="pt-5 text-left"> 
            <FlexColumn className="justify-between">
                <div className="pt-5">  
                    <label for="name">
                        <Typography variant="h12" classname=" text-color-brand-yellow2 pt-5">Your Name
                         </Typography>
                    </label>
                    <Flex className="relative mt-2 w-[437px] ] ">
                        <FlexBetween className="w-[437px] h-[40px] border-[#D2A42B] border-2 text-brand-gold bg-brand-blue absolute">
                            <Design1 />
                            <Flex className="absolute justify-start items-center w-[437px] h-[40px] z-50"><input type="text"
                                name="text"
                                id="name"
                                className="outline-none bg-transparent items-center placeholder:text-textColor-brand-gold2 absolute flex w-[437px] px-7 text-textColor-brand-gold2 h-[40px] "
                                placeholder="elias"
                                required/>
                            </Flex>
                            <Design2 />
                        </FlexBetween>
                    </Flex>
                </div>
                
                <div className="pt-10">  
                    <FlexBetween>
                        <Typography variant="h12" classname=" text-color-brand-yellow2">
                            Email
                        </Typography>
                        <Pen />
                    </FlexBetween>
                    <Flex className="relative w-[410px] h-[40px] pt-2">
                        <FlexBetween className="w-[437px] h-[40px] absolute border-[#D2A42B] border-2 text-brand-gold bg-brand-blue">
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
                <div>
                    <FlexBetween>
                        <Typography variant="h12" classname=" text-color-brand-yellow2">
                            Password
                        </Typography>
                        <Pen />
                    </FlexBetween>
                    <Flex className=" relative mt-2 outline-none w-[437px] h-[40px] ">
                        <FlexBetween className="w-[437px] border-[#D2A42B] h-[40px] border-2 text-brand-gold bg-brand-blue absolute">
                            <Design1 />
                            <Flex className="absolute justify-start items-center w-[437px] h-[40px] z-50">
                                <input 
                                    type="password"
                                    name="password"
                                    id="password"
                                    className=" bg-transparent outline-none absolute flex w-[437px] px-7 text-brand-gold h-[40px]"
                                    placeholder=""
                                    required
                                />
                            </Flex>
                            <Design2 />
                        </FlexBetween>
                    </Flex>
                </div>
                        <Flex className=" relative text-brand-gold bg-brand-yellow  focus:none focus:border-none mt-2 w-[437px] h-[40px] ">
                            <DesignButton2 className="" typoVariant="buttonLabel3" onClick={() => setShowModal(true)} >
                            SAVE
                            </DesignButton2>
                        </Flex>
                <div>
                    <Flex className=" relative bg-transparent  focus:none focus:border-none w-[437px]] h-[40px] ">
                        <FlexBetween className="w-[437px] h-[40px] border-[#D2A42B] border-2 text-brand-gold bg-brand-blue absolute">
                            <Design1 />
                            <FlexCenter className="border-none w-[437px] h-[40px] p-2 hover:cursor-pointer" >
                                    <Typography variant="h16" classname=" text-color-brand-yellow2 ">
                                    LOGOUT
                                    </Typography>
                                </FlexCenter>
                            <Design2 />
                        </FlexBetween>
                    </Flex>
                </div>
            </FlexColumn>
        </div>
</div>
        <div className="pt-5 pl-5 w-[480px] ">
            <Typography variant="h11" classname=" text-color-brand-yellow2 drop-shadow-3xl px-5 pt-5">
                PRAYER HISTORY
            </Typography>
        <div className="w-[450px]"> 
            <div className="space-y-6 h-[600px] w-[450px] overflow-y-auto overflow-hidden scrollbar scrollbar-thumb-[#FFCE70] scrollbar-track-transparent scrollbar-corner-transparent py-3.5 px-4 text-left">
                <div className="w-[400px] h-[75px] ">  
                <div className='w-[118px] h-[28px] text-center  bg-color-brand-yellow'><Typography variant="h15" classname=" text-color-brand-txt  ">12 January, 2025</Typography></div>
                        <FlexBetween className="pt-2 w-[400px]">
                            {/* <div className=" font-display text-jr text-brand-yellow  opacity-80">1 Evil Eye Remedy for Adam  Voigt</div> */}
                                <Typography variant="h13" classname=" text-color-brand-yellow2 opacity-80">1 Evil Eye Remedy for Adam  Voigt</Typography>
                                <Typography variant="h14" classname=" text-color-brand-yellow2 shadow-textColor-brand-yellow shadow-lg">$3.3</Typography>
                        </FlexBetween>
                    <Typography variant="h13" classname="hover:underline text-color-brand-yellow2">View Invoice</Typography>
                    {/* <a href="#" className="hover:underline font-display text-brand-yellow text-jr ">View Invoice</a> */}
                </div>
                <hr className="w-[400px] -mt-5 border-color-brand-op"></hr>
                <div className="w-[400px] h-[75px] ">  
                    {/* <div className="w-[118px] text-dts font-display py-1 px-0.5 bg-brand-yellow text-brand-txt text-center font-normal">12 January, 2025</div> */}
                    <div className='w-[118px] h-[28px] text-center  bg-color-brand-yellow'><Typography variant="h15" classname=" text-color-brand-txt  ">12 January, 2025</Typography></div>
                        <FlexBetween className="pt-2 w-[400px]">
                            <Typography variant="h13" classname=" text-color-brand-yellow2 opacity-80">1 Evil Eye Remedy for Adam  Voigt</Typography>
                            <Typography variant="h14" classname=" text-color-brand-yellow2 ">$2.5</Typography>
                        </FlexBetween>
                    <Typography variant="h13" classname="hover:underline text-color-brand-yellow2">View Invoice</Typography>
                </div>
                <hr className="w-[400px] border-color-brand-op"></hr>
                <div className="w-[400px] h-[75px] ">  
                <div className='w-[118px] h-[28px] text-center  bg-color-brand-yellow'><Typography variant="h15" classname=" text-color-brand-txt  ">12 January, 2025</Typography></div>
                        <FlexBetween className="pt-2 w-[400px]">
                            <Typography variant="h13" classname=" text-color-brand-yellow2 opacity-80">1 Evil Eye Remedy for Adam  Voigt</Typography>
                            <Typography variant="h14" classname=" text-color-brand-yellow2 ">$5</Typography>
                        </FlexBetween>
                    <Typography variant="h13" classname="hover:underline text-color-brand-yellow2">View Invoice</Typography>
                </div>
                <hr className="w-[400px] border-color-brand-op"></hr>
                <div className="w-[400px] h-[75px] ">  
                    <div className='w-[118px] h-[28px] text-center  bg-color-brand-yellow'><Typography variant="h15" classname=" text-color-brand-txt  ">12 January, 2025</Typography></div>
                        <FlexBetween className="pt-2 w-[400px]">
                            <Typography variant="h13" classname=" text-color-brand-yellow2 opacity-80">1 Evil Eye Remedy for Adam  Voigt</Typography>
                            <Typography variant="h14" classname=" text-color-brand-yellow2 ">$5</Typography>
                        </FlexBetween>
                    <Typography variant="h13" classname="hover:underline text-color-brand-yellow2">View Invoice</Typography>
                </div>
                <hr className="w-[400px] border-color-brand-op"></hr>
                <div className="w-[400px] h-[75px] ">  
                    <div className='w-[118px] h-[28px] text-center  bg-color-brand-yellow'><Typography variant="h15" classname=" text-color-brand-txt  ">12 January, 2025</Typography></div>
                        <FlexBetween className="pt-2 w-[400px]">
                            <Typography variant="h13" classname=" text-color-brand-yellow2 opacity-80">1 Evil Eye Remedy for Adam  Voigt</Typography>
                        {/* <div className=" font-display2 text-brand-yellow text-dlr drop-shadow-3xl">$3.3</div> */}
                            <Typography variant="h14" classname=" text-color-brand-yellow2 ">$2.3</Typography>
                        </FlexBetween>
                    <Typography variant="h13" classname="hover:underline text-color-brand-yellow2">View Invoice</Typography>
                </div>  
                <hr className="w-[400px] border-color-brand-op"></hr>
                <div className="w-[400px] h-[75px] ">  
                    <div className='w-[118px] h-[28px] text-center  bg-color-brand-yellow'><Typography variant="h15" classname=" text-color-brand-txt  ">12 January, 2025</Typography></div>
                        <FlexBetween className="pt-2 w-[400px]">
                            <Typography variant="h13" classname=" text-color-brand-yellow2 opacity-80">1 Evil Eye Remedy for Adam  Voigt</Typography>
                        {/* <div className=" font-display2 text-brand-yellow text-dlr drop-shadow-3xl">$3.3</div> */}
                            <Typography variant="h14" classname=" text-color-brand-yellow2 ">$2.3</Typography>
                        </FlexBetween>
                    <Typography variant="h13" classname="hover:underline text-color-brand-yellow2">View Invoice</Typography>
                </div>                   
            </div>
        </div>
        </div>
</div>
            </ModalFrame2>
        </FlexCenter>  
    );
}
export default DashModal;

