import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserState } from '../../models/User';
import { userCurrent } from '../../api/index';

const NavBar = () => {
    const [user, setUser] = useState<UserState>();

    useEffect(() => {
        const initQuestion = async () => {
            const user = await userCurrent();
            setUser(user);
            console.log(user)
        };

        initQuestion();
    }, []);

    return (
        <div className="navBar">
            <Link href="/" className="link">
                {/* <img src={home_icon} id="bar-icon" alt="home" /> */}
                D:D
            </Link>
            <div>{ }</div>
        </div>
    );
}

export default NavBar;