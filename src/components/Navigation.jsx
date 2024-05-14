import React from 'react';
import { Link } from 'react-scroll';
import navLinks from '../data/navlinks';

const Navigation = ({ ulClass, liClass, handleClick }) => {
    return (
        <ul className={ulClass}>
            {navLinks.map(({ id, link }) => (
                <li key={id}
                    className={`mx-4 py-2 capitalize font-medium cursor-pointer text-gray-500 hover:scale-[1.15] border-b-2 border-transparent hover:border-b-gray-300 duration-500 hover:text-gray-300 ${liClass}`}>
                    {id === 7 ? (
                        <a target="_blank" rel='noreferrer'>{link}</a>
                    ) : (
                        <Link
                            onClick={handleClick}
                            to={link}
                            smooth={true}
                            duration={500}>
                            {link}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Navigation;
