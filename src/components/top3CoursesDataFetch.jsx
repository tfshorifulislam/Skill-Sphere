import React from 'react';
import CoursesCard from './CoursesCard';
import { Button } from '@heroui/react';
import Link from 'next/link';

const Top3Courses = async () => {
    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json');
    const courses = await res.json();
    const topCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3)
    return (
        <div className='mt-10 md:mt-20 mx-auto w-11/12 md:w-9/12'>
            <div className='flex justify-between'>
                <h1 className='font-semibold text-sm md:text-2xl'>
                    Our Top Courses
                </h1>
                <Link href={'/courses'} className='text-sm md:text-md underline '>
                    View all
                </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0 md:gap-5  mt-5'>

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