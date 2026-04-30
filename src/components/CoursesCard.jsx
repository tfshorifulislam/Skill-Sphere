import { Button } from "@heroui/react";
import Link from "next/link";
import { FcRating } from "react-icons/fc";

const CoursesCard = ({ course }) => {
    console.log(course)
    const { instructor, image, rating, title } = course;
    return (
        <div className="border shadow-sm p-5 rounded-xl bg-white">
            <img
                className="rounded-xl"
                src={image}
                alt={title} />
            <div>
                <h1 className="font-semibold md:font-bold mt-5 text-lg md:text-2xl ">
                    {title}
                </h1>
            </div>
            <div className="flex  justify-between">
                <p className=" mt-2">
                    instructor: {instructor}
                </p>
                <p className="font-medium mt-2 flex gap-1 items-center">
                    <FcRating /> {rating}
                </p>
            </div>


            <Link href={`/courses/${course.id}`}>
                <Button
                    variant="outline"
                    className='w-full mt-8'>
                    View Details
                </Button>
            </Link>
        </div>
    );
};

export default CoursesCard;