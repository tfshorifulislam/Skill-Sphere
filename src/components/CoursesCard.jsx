import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

const CoursesCard = ({ course }) => {
    console.log(course)
    const { instructor, image, rating, title, category } = course;
    console.log(course)
    return (
        <div className="shadow-sm p-2 md:p-5 rounded-xl bg-white">
            <div className="relative aspect-square">
                <Image
                    className="rounded-lg object-cover"
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    fill
                    src={image}
                    alt={title} />
                <Chip className="absolute bottom-2 right-2">{category}</Chip>
            </div>
            <div>
                <h1 className="font-medium text-[#343434] md:font-semibold mt-5  md:text-lg ">
                    {title}
                </h1>
            </div>
            <div className="flex  justify-between">
                <p className=" text-[#5e5e5e] mt-2">
                    instructor: {instructor}
                </p>
                <p className="font-medium mt-2 text-[#5e5e5e] justify-center flex gap-1 items-center">
                    <IoStar /> {rating}
                </p>
            </div>


            <Link href={`/courses/${course.id}`}>
                <Button
                size="sm"
                    className='w-full mt-8'>
                    View Details
                </Button>
            </Link>
        </div>
    );
};

export default CoursesCard;