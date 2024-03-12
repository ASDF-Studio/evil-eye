import { Button } from '@/components/button';
import { Flex, FlexBetween, FlexCenter } from '@/components/layout';
import { Borderline, ChevronRight, Design1, Design2, Eye, LeftPlay, Play } from '../components/logo';
import { Typography } from '@/components/typography';
import InfoModal from '@/components/infoModal';
import { useState } from 'react';

export const LandingPage = () => {

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    return (
        <div className="flex flex-col min-h-screen justify-between">
        <div>
            <Flex className="relative mx-auto w-auto h-auto top-[20%] left-[20%]">
                <Button
                    variant="text"
                    endIcon={<Play className="text-color-brand-yellow" />}
                    className="text-color-brand-yellow w-[180px]"
                    typoVariant="h1"
                    onClick={() => setShowModal(true)}
                >
                    What is evil eye
                </Button>

                <InfoModal isvisible={showModal} onClose={() => setShowModal(false)}>
                    <div>
                        <h1 className='font-roman drop-shadow-3xl text-[35px] font-normal pb-5'>WHAT IS EVIL EYE</h1>
                        <p className='text-justify font-rosarivo text-base font-normal w-auto pr-5 text-textColor-brand-yellow opacity-80'>The Greek traditional belief of the evil eye dates <br></br> back to at least the 6th century BC, the Classical <br></br> Antiquity, or the time period that encompassed the <br></br> Classical Era in Ancient Greece, when it commonly <br></br> appeared on drinking vessels. During this time, the <br></br> Greek civilization was at its intellectual peak. A <br></br> common theme in literature at the time was that the <br></br> eyes were a source of deadly rays that could bring <br></br> harm to others. Plutarch, the Ancient Greek writer, is <br></br> one of those who wrote about this concept. The <br></br> belief in the evil eye tended to spread as Alexander <br></br> the Great brought the Greek culture to the East.</p>
                        <br/>
                        <p className=' mb-6 font-rosarivo text-base font-normal w-auto pr-5 text-textColor-brand-yellow opacity-80'>The evil eye curse is a powerful malicious glance cast <br></br> by a human on another human being, pet or thing <br></br> out of anger, envy, greed, or any other negative <br></br> emotion. The glare is so powerful that it can cause <br></br> harm, injury, misfortune, physical, and mental illness <br></br> to the afflicted person. There is no particular reason <br></br> for getting an evil eye curse. A person can <br></br> intentionally or unintentionally cast it on someone/ <br></br> something they praise or envy.</p>
                    </div>
                </InfoModal>

            </Flex>

            <Flex className="relative mx-auto w-auto h-auto top-60 left-[28%]">
            <Button
                variant="text"
                endIcon={<Play className="text-color-brand-yellow" />}
                className="text-color-brand-yellow"
                typoVariant="h1"
                onClick={() => setShowModal2(true)}
            >
                cure
            </Button>

            <InfoModal isvisible={showModal2} onClose={() => setShowModal2(false)}>
                <div>
                    <h1 className='font-roman mb-3 drop-shadow-3xl text-3xl font-bold pb-5'>CURE</h1>
                    <p className='font-rosarivo font-normal w-auto pr-5'>Evil Eye Remedy is the original and authentic cure of <br></br> its kind. Relief from your symptoms is close at hand. <br></br> The ancient and special Evil Eye prayer will be said <br></br> for you, your loved one, your pet, or household item. <br></br> The act of curing the Evil Eye or ‘mati’ is called <br></br> ‘xematiasma’ in Greece, roughly translating to “an <br></br> undoing of the eye”.</p>
                    <br></br>
                    <p className='font-rosarivo font-normal w-auto pr-5 mb-6'>It is believed that there are several ways to perform a <br></br> ‘xematiasma’, with the most powerful being with <br></br> ‘vaskania’ or ancient ‘xematiasma’ prayers.</p>
                </div>
            </InfoModal>
            </Flex>

            <Flex className="relative mx-auto w-auto h-auto top-30 left-[65%]">
            <Button
                variant="text"
                leftIcon={<LeftPlay className="text-color-brand-yellow" />}
                className="text-color-brand-yellow"
                typoVariant="h1"
                onClick={() => setShowModal3(true)}
            >
                symptoms
            </Button>

            <InfoModal isvisible={showModal3} onClose={() => setShowModal3(false)}>
                <div>
                    <h1 className='font-roman drop-shadow-3xl mb-2 text-3xl font-bold pb-5'>SYMPTOMS</h1>
                    <p className=' font-rosarivo font-normal w-auto pr-5'>Whenever a person gets affected with an evil eye <br></br> curse, it affects them physically, mentally, <br></br> emotionally, and financially. Here are some common <br></br> signs and symptoms you can find in an afflicted <br></br> person:</p>
                    <ul className=" leading-normal font-display list-disc pl-7">
                        <li>Fever, Headache, Nausea</li>
                        <li>Heavy Eyelids and Yawning</li>
                        <li>Mood Swings</li>
                        <li>Anger & Frustration</li>
                        <li>Financial Loss</li>
                        <li>Physical Illness</li>
                        <li>Arguments with loved ones</li>
                        <li>Feeling discomfort in social gatherings</li>
                    </ul>
                    <p className='font-rosarivo font-normal w-auto mb-6 pr-5'>Pregnant ladies, newborn babies, kids, young and <br></br> successful people are more vulnerable to the evil eye <br></br> curse as they consciously or unconsciously drive <br></br> more attention and praise from other people.</p>
                </div>
            </InfoModal>
            </Flex>
        </div>

        {/* bottom part */}
        <div className='flex flex-col items-center pb-[200px]'>
            <Borderline />
            <Typography variant="h2" classname=" text-color-brand-yellow2">
                Relief from the Evil Eye
            </Typography>
            <Typography variant="body" classname="w-[800px] text-textColor-brand-yellow opacity-60">
                Evil Eye Remedy is the original and authentic cure of its kind. Relief from your symptoms is close at hand. The ancient and special Evil Eye prayer will be said for you, your loved one, or your pet.
            </Typography>
            
            <Flex className="pt-5">
                <FlexCenter className="bg-orange-300 shadow border-2 border-amber-300 justify-start gap-[15px]">
                    <Flex className="relative border-amber-300 border text-brand-yellow bg-transparent focus:none focus:border-none w-[410px] h-[40px]">
                        <FlexBetween className="w-[410px] absolute">
                            <Design1/>
                            <button className="text-[18px] font-normal border-none w-[410px] h-[40px] font-roman p-2 justify-center text-textColor-brand-gold" >Recite the prayer</button>
                            <Design2 />
                        </FlexBetween>
                    </Flex>
                </FlexCenter>
            </Flex>
        </div>
        </div>
    );
};
