import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const TeacherDetailsCard = ({ instructor }) => {
    console.log(instructor)

    return (

        <div
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(93,56,222,0.25)]"
        >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-b from-[#5D38DE]/10 to-transparent pointer-events-none"></div>


            <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-100">
                <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={500}
                    height={500}
                    className="object-cover object-[50%_25%] transition-transform duration-700 group-hover:scale-110"
                />
            </div>


            <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-[#5D38DE] group-hover:text-slate-900 transition">
                    {instructor.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {instructor.bio || "Professional Instructor"}
                </p>


                <div className="mt-4 flex flex-wrap gap-2">
                    {instructor.rating.map((skill, idx) => (
                        <div
                            key={idx}
                            className="text-[11px] tracking-wide bg-[#5D38DE]/10 text-[#5D38DE] px-2.5 py-1 rounded-full border border-[#5D38DE]/10"
                        >
                            {skill.trim()}
                        </div>
                    ))}
                </div>


                <div className="flex items-center gap-1 mt-5 text-yellow-500">
                    <FaStar className="text-sm" />
                    <FaStar className="text-sm" />
                    <FaStar className="text-sm" />
                    <FaStar className="text-sm" />
                    <FaStar className="text-gray-300 text-sm" />

                    <span className="text-gray-500 text-sm ml-2">
                        4.8
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TeacherDetailsCard;