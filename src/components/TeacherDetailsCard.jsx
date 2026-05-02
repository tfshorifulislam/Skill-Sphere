import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const TeacherDetailsCard = (ins) => {
    console.log(ins.image)
    return (

        <div
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-6 text-center overflow-hidden">

            {/* glow effect */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#5D38DE]/10 blur-2xl rounded-full group-hover:scale-150 transition" />

            {/* Image */}
            <div className=" w-24 h-24 mx-auto">
                <Image
                    src={ins.image}
                    alt={ins.name || "Instructor"}
                    width={500}
                    height={500}
                    className="rounded-full object-cover border-4 border-white shadow-md group-hover:scale-110 transition"
                />
            </div>

            {/* Name */}
            <h3 className="mt-4 font-semibold text-lg text-[#111827]">
                {ins.name}
            </h3>

            {/* Role */}
            <p className="text-sm text-gray-500">
                {ins.role}
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mt-3 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            {/* badge */}
            <div className="mt-4">
                <span className="text-xs px-3 py-1 bg-[#5D38DE]/10 text-[#5D38DE] rounded-full">
                    Expert Instructor
                </span>
            </div>

            {/* hover line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#5D38DE] group-hover:w-full transition-all duration-300" />
        </div>
    );
};

export default TeacherDetailsCard;