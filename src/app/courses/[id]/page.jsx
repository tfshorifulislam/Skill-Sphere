
import React from 'react';
import { Chip } from '@heroui/react';
const CoursesDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json');
    const courses = await res.json();
    const course = courses.find(i => i.id == id)
    console.log(course)
    return (
        <div className='w-11/12 mx-auto mt-10 flex flex-col md:flex-row border bg-white p-6 rounded-lg shadow-sm gap-4'>
            <div className='relative'>
                <img className='rounded-lg' width={500} height={500} alt='at' src={course.image} />
                <Chip size='lg' className='absolute right-2 top-2'>{course.category}</Chip>
            </div>
            <div>
                <p className='font-bold text-xl md:text-3xl mb-3 text-[#1e1e1e]'>
                    {course.title}
                </p>
                <p>
                    {course.description}
                </p>
            </div>
        </div>
    );
};

export default CoursesDetailsPage;