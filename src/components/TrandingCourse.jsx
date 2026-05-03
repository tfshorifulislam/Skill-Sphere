import React from 'react';
import CoursesCard from '@/components/CoursesCard';

const TrendingCourse = async () => {

    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json', {
        cache: 'no-store'
    });

    const courses = await res.json();

    const trendingCourses = courses
        .filter(course => course.rating < 4.7 && course.rating >= 4.5  )
        .slice(0, 6);

    return (
        <section className="w-11/12 mx-auto mt-20">

            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-bold text-[#0f172a]">
                🔥Trending <span className="text-[#5D38DE]">Courses</span>
                </h2>
                <p className="text-gray-500 mt-2">
                    Most popular courses based on student activity
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    trendingCourses.map(course => (
                        <CoursesCard key={course.id} course={course} />
                    ))
                }
            </div>

        </section>
    );
};

export default TrendingCourse;