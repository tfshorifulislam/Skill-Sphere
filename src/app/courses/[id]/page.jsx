
import React from 'react';
import { Button, Card, Chip, CloseButton } from '@heroui/react';
import Image from 'next/image';
const CoursesDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    const res = await fetch('https://skill-sphere-topaz.vercel.app/data.json');
    const courses = await res.json();
    const course = courses.find(i => i.id == id)
    console.log(course)
    return (
        <Card className="w-full items-stretch md:flex-row mt-10 w-11/12 mx-auto">
            <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                <Image
                    alt={course.title}
                    width={500}
                    height={500}
                    className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                    loading="lazy"
                    src={course.image}
                />
            </div>
            <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                    <Card.Title className="pr-8">Become an ACME Creator!</Card.Title>
                    <Card.Description>
                        Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet
                        faucibus etiam.
                    </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">Only 10 spots</span>
                        <span className="text-xs text-muted">Submission ends Oct 10.</span>
                    </div>

                </Card.Footer>
            </div>
        </Card>
    );
};

export default CoursesDetailsPage;