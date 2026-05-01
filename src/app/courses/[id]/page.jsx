import React from 'react';
import { Card, Chip, Separator } from '@heroui/react';
import { IoStar, IoTime } from 'react-icons/io5';
import Image from 'next/image';

const CoursesDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json');
    const courses = await res.json();
    const course = courses.find(i => i.id == id);

    return (
        <div className="w-11/12 md:w-9/12 mx-auto mt-10 md:mt-16">
            <Card className="p-4 md:p-6 shadow-xl rounded-2xl hover:shadow-2xl transition duration-300">

                <div className="flex flex-col md:flex-row gap-6">

                   
                    <div className="md:w-1/2 w-full">
                        <Image
                            className="rounded-xl object-cover w-full h-full"
                            sizes='(max-width: 768px) 100vw, 50vw'
                            width={500}
                            height={350}
                            src={course.image}
                            alt={course.title}
                        />
                    </div>

                   
                    <div className="flex flex-col justify-between md:w-1/2">

                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold text-[#080f22] mb-3">
                                {course.title}
                            </h2>

                            <p className="text-gray-600 leading-6 mb-4">
                                {course.description}
                            </p>

                            <p className="text-sm text-gray-500 mb-4">
                                Instructor: <span className="font-medium text-black">{course.instructor}</span>
                            </p>

                           
                            <div className="flex gap-3 flex-wrap mb-5">
                                <Chip variant="flat" color="primary">{course.category}</Chip>
                                <Chip variant="flat" color="secondary">{course.level}</Chip>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mt-4 text-gray-700">

                            <span className="flex items-center gap-2">
                                <IoTime className="text-lg" />
                                {course.duration}
                            </span>

                            <Separator orientation="vertical" className="h-5" />

                            <span className="flex items-center gap-2">
                                <IoStar className="text-yellow-500 text-lg" />
                                {course.rating}
                            </span>
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    );
};

export default CoursesDetailsPage;