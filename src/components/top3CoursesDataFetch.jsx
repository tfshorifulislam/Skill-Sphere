import React from 'react';
import CoursesCard from './CoursesCard';
import { Button } from '@heroui/react';
import Link from 'next/link';

const Top3Courses = async () => {
    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json', {
        cache: 'no-store'
    });
    const courses = await res.json();

    const topCourses = courses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <section className="mt-14 md:mt-24 bg-[#f8f9ff] py-10 md:py-16">

            <div className="w-11/12 md:w-10/12 mx-auto">

                {/* Header */}
                <div className="flex items-end justify-between mb-8 md:mb-10">

                    <div>
                        <h2 className="text-xl md:text-3xl font-bold text-[#0f172a]">
                            Our Top <span className="text-[#5D38DE]">Courses</span>
                        </h2>

                        <p className="text-gray-500 text-sm md:text-base mt-2">
                            Most popular and highly rated courses by our students
                        </p>

                        <div className="w-16 h-1 bg-[#5D38DE] mt-3 rounded-full"></div>
                    </div>

                    <Link href="/courses">
                        <Button
                            variant="light"
                            className="text-[#5D38DE] font-medium hover:bg-[#5D38DE]/10"
                        >
                            View All →
                        </Button>
                    </Link>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {topCourses.map(course => (
                        <CoursesCard key={course.id} course={course} />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Top3Courses;