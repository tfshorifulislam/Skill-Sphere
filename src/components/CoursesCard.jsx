import { Button, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoHeart } from 'react-icons/io5';
import { PiDownloadSimpleLight } from 'react-icons/pi';

const CoursesCard = ({ course }) => {
    console.log(course)
    const {category, description,image, rating, title} = course;
    return (
        <div className='rounded-xl p-5 shadow-sm border'>

            <div className='relative w-full aspect-square'>
                <Image
                    className='rounded-xl object-cover'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    src={image}
                    alt={title} />
                    <Chip size='sm' className='absolute right-2 top-2'>{category}</Chip>
            </div>

            <div className='font-medium text-2xl my-3'>
                <h2>{title}</h2>
            </div>
            <div className='flex gap-4 my-5'>
                <div className='flex items-center gap-1'>
                    <IoHeart />
                    {/* <p>{course.likes}</p> */}
                </div>
                <Separator orientation='vertical' />
                <div className='flex items-center gap-1'>
                    <PiDownloadSimpleLight />
                    {/* <p>{course.downloads}</p> */}
                </div>
            </div>
            <Link href={`/courses/${course.id}`}>
            <Button className='w-full' variant='outline'>View</Button>
            </Link>
        </div>
    );
};

export default CoursesCard;