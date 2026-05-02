import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import TeacherDetailsCard from "./TeacherDetailsCard";

const InstructorsSection = async () => {
    const res = await fetch(
        "https://skill-sphere-topaz.vercel.app/instructors.json"
    );

    const data = await res.json();

    return (
        <section className="w-11/12 mx-auto mt-24 mb-24">
           
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                    Top <span className="text-[#5D38DE]">Instructors</span>
                </h2>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                    Learn from industry experts with real-world experience and proven teaching systems.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {data?.map((instructor) => (
                    <TeacherDetailsCard key={instructor.id} instructor={instructor} />
                ))}
            </div>
        </section>
    );
};

export default InstructorsSection;