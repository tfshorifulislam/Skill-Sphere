import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const LearningTips = () => {
    return (
        <div className='w-11/12 mx-auto mt-10 md:mt-20'>
            <h1 className='font-semibold text-xl md:text-3xl'>
                Learning Tips
            </h1>
            <div className='flex flex-col md:flex-row gap-10 mt-10'>
                <div className='md:w-1/2'>
                    <Image
                        className='rounded-lg'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        width={500}
                        height={500}
                        src='/learing.jpg'
                        alt='learing tips' />
                </div>
                <div className='md:w-2/2'>
                    <h2 className='font-medium text-lg md:text-2xl mb-2 text-[#1e1e1e]'>
                        Learning Tips
                    </h2>
                    <p className='md:max-w-[80%] text-[#5e5e5e] mb-5'>
                        Enhance your learning process by adopting effective study techniques and building consistent habits. These strategies will help you understand concepts more deeply, retain information longer, and stay focused throughout your study sessions.
                    </p>
                    <div className='flex flex-col space-y-5 font-medium text-lg text-[#1e1e1e]
                    '>
                        <span className='flex items-center gap-3'>
                            <FaCheck />
                            Break topics into small, manageable chunks to avoid overload
                        </span>
                        <span className='flex items-center gap-3'>
                            <FaCheck />
                            Use active recall instead of passive reading
                        </span>
                        <span className='flex items-center gap-3'>
                            <FaCheck />
                            Follow the Pomodoro technique to maintain focus and energy
                        </span>
                        <span className='flex items-center gap-3'>
                            <FaCheck />
                            Take clear and concise notes for quick revision
                        </span>
                        <span className='flex items-center gap-3'>
                            <FaCheck />
                            Revise regularly to strengthen long-term memory
                        </span>
                        <span className='flex items-center gap-3'>
                            <FaCheck />
                            Practice with real-world examples or problem-solving
                        </span>
                        <span className='flex items-center gap-3'>
                            <FaCheck />
                            Avoid multitasking and maintain deep focus
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningTips;