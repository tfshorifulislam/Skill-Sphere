
import React from 'react';
import { Card,  } from '@heroui/react';
import Link from 'next/link';
const CoursesDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json');
    const courses = await res.json();
    const course = courses.find(i => i.id == id)
    console.log(course)
    return (
        <Card className="w-11/12 mx-auto mt-10 p-5 flex flex-col  md:flex-row">
            <img src={course.image} className='md:w-100 rounded-xl' alt="" />
            <Card.Header>
                <Card.Title
                className='font-medium md:font-semibold text-lg md:text-xl text-[#313131] mb-4'>{course.title}</Card.Title>
                <Card.Description>
                    {course.description}
                </Card.Description>
            </Card.Header>
        </Card>
    );
};

export default CoursesDetailsPage;