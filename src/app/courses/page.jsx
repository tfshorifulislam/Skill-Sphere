import CoursesCard from '@/components/CoursesCard';
import React from 'react';

const CoursesPage = async () => {
    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json');
    const courses = await res.json();
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 w-11/12 mx-auto mt-10 animate__animated animate__fadeInLeft'>
            {
                courses.map(course => <CoursesCard key={course.id} course={course} />)
            }
        </div>
    );
};

export default CoursesPage;