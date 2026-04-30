import React from 'react';
import CoursesCard from './CoursesCard';

const Top3Courses = async () => {
    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json');
    const courses = await res.json();
    const topCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3)
    return (
        <div className='mt-5 md:mt-20 space-y-3 md:space-y-8 '>
            <h1 className='flex justify-center text-center font-semibold text-2xl md:text-5xl mb-5 md:mb-17'>
                Top Courses
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto w-11/12 '>

                {
                    topCourses.map(course =>
                        <CoursesCard
                            key={course.id}
                            course={course} />)
                }
            </div>
        </div>
    );
};

export default Top3Courses;