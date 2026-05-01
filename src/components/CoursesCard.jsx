import { Button, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoStar, IoStarHalf, IoTime } from "react-icons/io5";

const CoursesCard = ({ course }) => {
    const { instructor, image, duration, level, rating, title, category, id } = course;

    return (
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

          
            <div className="relative aspect-4/3 overflow-hidden">
                <Image
                    className="object-cover group-hover:scale-105 transition duration-300"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={image}
                    alt={title}
                />

               
                <Chip className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs">
                    {category}
                </Chip>
            </div>

           
            <div className="p-4 md:p-5">

                
                <h2 className="font-semibold text-base md:text-lg text-[#111827] line-clamp-2">
                    {title}
                </h2>

               
                <div className="flex justify-between items-center mt-3">
                    <p className="text-sm text-gray-500 line-clamp-1">
                        {instructor}
                    </p>
                    <Chip size="sm" variant="flat" color="secondary">
                        {level}
                    </Chip>
                </div>

               
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-700">

                    <div className="flex items-center gap-1">
                        <IoStar className="text-yellow-500" />
                        <span>{rating}</span>
                    </div>

                    <Separator orientation="vertical" className="h-4" />

                    <div className="flex items-center gap-1">
                        <IoTime />
                        <span>{duration}</span>
                    </div>
                </div>

               
                <Link href={`/courses/${id}`}>
                    <Button
                        size="sm"
                        className="w-full mt-5 rounded-xl bg-[#5D38DE] hover:bg-[#4c2fc2] transition"
                    >
                        View Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default CoursesCard;