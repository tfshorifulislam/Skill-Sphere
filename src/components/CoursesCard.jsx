import { Button, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoStar, IoStarHalf, IoTime } from "react-icons/io5";

const CoursesCard = ({ course }) => {
    console.log(course)
    const { instructor, image,duration, level, rating, title, category } = course;
    console.log(course)
    return (
        <div className="shadow-sm p-3 md:p-5 rounded-xl bg-white">
            <div className="relative aspect-square">
                <Image
                    className="rounded-lg object-cover"
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    fill
                    src={image}
                    alt={title} />
                <Chip className="absolute bottom-2 right-2 ">{category}</Chip>
            </div>
            <div>
                <h1 className="font-medium text-[#5D38DE] md:font-semibold mt-5  md:text-lg line-clamp-1">
                    {title}
                </h1>
            </div>
            <div className="flex mt-2 justify-between items-center ">
                <p className=" text-[#5e5e5e] mt-2">
                    instructor: {instructor}
                </p>
                <Chip>{level}</Chip>

            </div>
            <div className="flex font-medium gap-5 mt-5  text-lg text-[#1e1e1e]">
                <p className=" flex gap-1 items-center ">
                    <IoStarHalf  /> {rating}
                </p>
                <Separator orientation="vertical" />
                <p className="flex gap-1 items-center ">
                    <IoTime   /> {duration}
                </p>
            </div>


            <Link href={`/courses/${course.id}`}>
                <Button
                    size="sm"
                    className='w-full mt-8 rounded-lg bg-[#5D38DE]'>
                    View Details
                </Button>
            </Link>
        </div>
    );
};

export default CoursesCard;