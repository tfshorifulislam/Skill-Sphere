import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';


const TeacherDetailsCard = ({ instructor }) => {
    console.log(instructor)

    return (

        <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(93,56,222,0.25)]">


            <Chip className="absolute top-3 left-3 z-20 bg-[#5D38DE] text-white text-xs px-3 py-1 rounded-full shadow">
                {instructor.category}
            </Chip>


            <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-100">
                <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover object-[50%_25%] transition-transform duration-700 group-hover:scale-110"
                />


                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
            </div>


            <div className="p-6 relative z-10">


                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#5D38DE] transition">
                    {instructor.name}
                </h3>


                <p className="text-sm text-[#5D38DE] font-medium mt-1">
                    {instructor.role}
                </p>


                <p className="text-sm text-gray-500 mt-3 leading-relaxed line-clamp-2">
                    {instructor.bio}
                </p>


                <div className="flex items-center justify-between mt-4">


                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                        {instructor.experience}
                    </span>


                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                        <FaStar />
                        <span className="text-gray-600 ml-1">
                            {instructor.rating}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDetailsCard;