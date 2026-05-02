import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';


const instructors = async () =>{
    const res = await fetch('https://skill-sphere-topaz.vercel.app/instructors.json')
    const data = await res.json()
}


const InstructorsSection = () => {
    return (
        <section className="w-11/12 mx-auto mt-20">

            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-bold text-[#0f172a]">
                    Top <span className="text-[#5D38DE]">Instructors</span>
                </h2>
                <p className="text-gray-500 mt-3 text-sm md:text-base">
                    Learn from experienced industry professionals
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                {data.map((ins) => (
                    <div
                        key={ins.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 text-center group"
                    >

                        {/* Image */}
                        <div className="w-24 h-24 mx-auto relative">
                            <Image
                                src={ins.image}
                                alt={ins.name}
                                fill
                                className="rounded-full object-cover group-hover:scale-105 transition"
                            />
                        </div>

                        {/* Name */}
                        <h3 className="mt-4 font-semibold text-gray-800">
                            {ins.name}
                        </h3>

                        {/* Role */}
                        <p className="text-sm text-gray-500">
                            {ins.role}
                        </p>

                        {/* Rating (static UI) */}
                        <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default InstructorsSection;