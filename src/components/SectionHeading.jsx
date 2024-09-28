import React from 'react'

const SectionHeading = ({ heading,secondHeading }) => {
    return (
        <div className="pb-8 text-white">
            {secondHeading && <p className='py-6 text-lg'>
                {secondHeading}
            </p>}
        </div>
    )
}

export default SectionHeading;
