import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const tips = [
    "Break topics into small chunks",
    "Use active recall techniques",
    "Follow Pomodoro method",
    "Take concise notes",
    "Revise regularly",
    "Practice real-world problems",
];

const LearningTips = () => {
    return (
        <section className="relative py-16 md:py-24 bg-linear-to-b from-white to-[#f7f7ff] overflow-hidden">


            <div className="absolute top-0 left-0 w-72 h-72 bg-[#5D38DE]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl"></div>

            <div className="relative w-11/12 md:w-10/12 mx-auto">

                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#5D38DE]/10 text-[#5D38DE] text-sm font-medium mb-4">
                        Learning Growth
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] leading-tight">
                        Master Better <span className="text-[#5D38DE]">Study Habits</span>
                    </h2>

                    <p className="mt-5 text-gray-500 text-sm md:text-base leading-7">
                        Transform the way you learn with effective strategies designed
                        to improve concentration, retention, and long-term consistency.
                    </p>
                </div>


                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">


                    <div className="relative">


                        <div className="absolute -top-5 -right-5 z-10 hidden md:block bg-white/80 backdrop-blur-md shadow-lg rounded-2xl px-4 py-3 border border-white">
                            <p className="text-sm font-medium text-[#111827]">
                                📚 Productivity Boost
                            </p>
                        </div>

                        <Image
                            sizes='(max-width: 768px) 100vw, 50vw'
                            src="/download.jpg"
                            alt="Learning tips"
                            width={550}
                            height={550}
                            className="rounded-3xl shadow-2xl object-cover w-full hover:scale-[1.02] transition duration-300"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#111827] mb-4">
                            Study Smarter, Not Longer
                        </h3>

                        <p className="text-gray-500 leading-7 mb-8">
                            Learning efficiently is about building systems, not depending
                            on motivation. These small habits compound into major results.
                        </p>

                        {/* tips cards */}
                        <div className="space-y-4">
                            {tips.map((tip, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
                                >
                                    <div className="bg-[#5D38DE] text-white p-2 rounded-xl">
                                        <FaCheck size={12} />
                                    </div>

                                    <p className="text-gray-700 font-medium text-sm md:text-base">
                                        {tip}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LearningTips;