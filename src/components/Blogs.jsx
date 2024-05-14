import React from 'react';
import SectionHeading from './SectionHeading';
import blogs from '../data/blogs';
import GridLayout from './GridLayout';
import Blog from './Blog';

const Blogs = () => {
    return (
        <div id="blogs" className='pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-black via-black to-gray-800 text-white'>
            <div className='section'>
                <SectionHeading heading="Blogs" secondHeading="Check Out Some of my blogs" />
                <GridLayout style="sm:grid-cols-2 md:max-w-2xl mx-auto lg:max-w-none lg:grid-cols-3">
                    {blogs.map((blog) => {
                        return (
                            <Blog key={blog.name} blog={blog} />
                        );
                    })}
                </GridLayout>
            </div>
        </div>
    );
}

export default Blogs;
