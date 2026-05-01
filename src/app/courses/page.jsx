import CoursesCard from '@/components/CoursesCard';
import React from 'react';

const CoursesPage = async () => {
    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json');
    const courses = await res.json();

    return (
        <section className="bg-[#f8f9ff] min-h-screen py-10 md:py-16">

           
            <div className="text-center mb-8 md:mb-12 px-4">

                <h1 className="text-2xl md:text-4xl font-bold text-[#0f172a] mb-3">
                    Explore Our <span className="text-[#5D38DE]">Courses</span>
                </h1>

                <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
                    Discover top-quality courses designed to help you master new skills,
                    boost your career, and achieve your goals faster.
                </p>

                
                <div className="w-20 h-1 bg-[#5D38DE] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

                {courses.map(course => (
                    <CoursesCard key={course.id} course={course} />
                ))}

            </div>

        </section>
    );
};

export default CoursesPage;