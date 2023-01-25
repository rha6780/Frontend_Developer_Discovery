import React, { useEffect, useState } from 'react';
import '../../asset/css/navBar.css';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="link">
                <div className="nav-item">
                    {/* <img src={home_icon} id="bar-icon" alt="home" /> */}
                    D:D
                </div>
            </Link>
            <div>{ }</div>
        </div>
    );
}

export default NavBar;