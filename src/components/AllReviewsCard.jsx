import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const AllReviewsCard = ({ review }) => {
    return (
        <div
            className="w-[320px] bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">


            <div className="flex items-center gap-3">
                <Image
                    src={review.image}
                    width={50}
                    height={50}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                    <h4 className="font-semibold text-slate-900">
                        {review.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                        {review.role}
                    </p>
                </div>
            </div>


            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                {review.review}
            </p>


            <div className="flex items-center gap-1 mt-4 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span className="text-gray-500 text-sm ml-2">
                    {review.rating}
                </span>
            </div>

        </div>
    );
};

export default AllReviewsCard;