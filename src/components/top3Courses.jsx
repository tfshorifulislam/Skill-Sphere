import React from 'react';

const Top3Courses = async () => {
    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json');
    const courses = await res.json();
    const topCourses = courses.sort((a, b) => b.rating - a.rating)
    const top3Courses = topCourses.slice(0, 3)
    return (
        <div>
            {
                top3Courses.map(i => <div key={i.id}>{i.title}</div>)
            }
        </div>
    );
};

export default Top3Courses;