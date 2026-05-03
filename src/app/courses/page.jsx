'use client'
import CoursesCard from '@/components/CoursesCard';
import { Button } from '@heroui/react';
import { useEffect, useState } from 'react';
import { GoSearch } from 'react-icons/go';


const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json', { cache: 'no-store' });
            const data = await res.json();
            setCourses(data);
            setFilteredCourses(data);
        };
        fetchCourses();
    }, []);

    const handleSearch = () => {
        const filtered = courses.filter(course =>
            course.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCourses(filtered);
    };


    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value === "") {
            setFilteredCourses(courses);
        }
    };

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

                <div className="mt-6 flex justify-center">
                    <div className="flex w-full max-w-md rounded-lg border border-gray-200 bg-white shadow-sm 
                    focus-within:ring-2 focus-within:ring-[#5D38DE]/20 transition overflow-hidden">


                        <div className="relative flex-1">
                            <input
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Search courses..."
                                className="w-full pl-12 pr-4 py-3 bg-transparent outline-none"
                            />


                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                                <GoSearch />
                            </span>
                        </div>


                        <Button
                            onClick={handleSearch}
                            className="h-12.5 rounded-l-none rounded-r-lg bg-[#5D38DE] text-white px-6 hover:bg-[#4c2fc2] transition"
                        >
                            Search
                        </Button>

                    </div>
                </div>

                <div className="w-20 h-1 bg-[#5D38DE] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <CoursesCard key={course.id} course={course} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 py-10">No courses found with that title.</p>
                )}
            </div>

        </section>
    );
};

export default CoursesPage;