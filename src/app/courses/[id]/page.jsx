
import React from 'react';
import { Card, Chip, Separator, } from '@heroui/react';
import Link from 'next/link';
import { IoStar, IoTime } from 'react-icons/io5';
const CoursesDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json');
    const courses = await res.json();
    const course = courses.find(i => i.id == id)
    console.log(course)
    return (
        <Card className="w-11/12 mx-auto mt-10 p-5 flex flex-col  md:flex-row">
            <img
                src={course.image}
                className='md:w-70 rounded-xl' alt="" />
            <Card.Header>
                <Card.Title
                    className='font-medium md:font-semibold text-lg md:text-xl text-[#313131] mb-4'>{course.title}</Card.Title>
                <Card.Description>
                    {course.description}
                </Card.Description>
                <p className='mt-3'>
                    instructor: {course.instructor}
                </p>
                <div className='flex gap-5  md:flex-row mt-5'>
                    <Chip>{course.category}</Chip>
                    <Chip>{course.level}</Chip>
                </div>
                <div className='flex gap-8  md:flex-row mt-6'>
                    <span className='flex items-center gap-2 md:text-lg'>
                        <IoTime /> {course.duration}
                    </span>
                    <Separator orientation="vertical" />
                    <span className='flex items-center gap-2 md:text-lg'>
                        <IoStar /> {course.rating}

                    </span>
                </div>
            </Card.Header>
        </Card>
    );
};

export default CoursesDetailsPage;