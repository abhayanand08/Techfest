/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

import Link from 'next/link';
import { AuthContext } from '../../context/AuthContext';
import Styles from './Navbar.module.css';

export default function Navbar() {
  const { user, logout } = React.useContext(AuthContext);

  const exit = () => {
    logout();
  };
  const [header, setHeader] = useState();
  const [toggleNav, settoggleNav] = useState(false);
  // const [showNav, setShowNav] = useState(false);

  // const handleShowNavbar = (prev) => {
  //   setShowNav(!prev);
  // };

  const userloggedin = (
    <div className={Styles.navContainer}>
      <div className={Styles.logo}>
        <img src="img/logo.svg" alt="" />
      </div>
      <div className={Styles.navLinks}>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="/event" legacyBehavior>
          <a>Events</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a>About Us</a>
        </Link>
        <Link href="/contactus" legacyBehavior>
          <a>Contact Us</a>
        </Link>
        <a onClick={exit}>Log out</a>
      </div>
      <div className={Styles.hamBurger}>
        <a onClick={() => settoggleNav((prev) => !prev)}>
          {toggleNav ? <GrClose /> : <GiHamburgerMenu />}
        </a>
      </div>
    </div>
  );

  const adminloggedin = (
    <div className={Styles.navContainer}>
      <div className={Styles.logo}>
        <img src="img/logo.svg" alt="" />
      </div>
      <div className={Styles.navLinks}>
        <Link href="/admin/events" legacyBehavior>
          <a>Club Events</a>
        </Link>
        <a onClick={exit}>Log out</a>
      </div>
      <div
        className={Styles.hamBurger}
        onClick={() => settoggleNav((prev) => !prev)}
      >
        {toggleNav ? <GrClose /> : <GiHamburgerMenu />}
      </div>
    </div>
  );

  const notloggedin = (
    <div className={Styles.navContainer}>
      <div className={Styles.logo}>
        <img src="img/logo.svg" alt="" />
      </div>
      <div className={Styles.navLinks}>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="/event" legacyBehavior>
          <a>Events</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a>About Us</a>
        </Link>
        <Link href="/contactus" legacyBehavior>
          <a>Contact Us</a>
        </Link>
        <Link href="/login" legacyBehavior>
          <a>Sign in</a>
        </Link>
        <Link href="/register" legacyBehavior>
          <a>Sign up</a>
        </Link>
      </div>
      <div
        className={Styles.hamBurger}
        onClick={() => settoggleNav((prev) => !prev)}
      >
        {toggleNav ? <GrClose /> : <GiHamburgerMenu />}
      </div>
    </div>
  );

  useEffect(() => {
    if (user && user.admin) {
      setHeader(adminloggedin);
    }
    if (user && !user.admin) {
      setHeader(userloggedin);
    }
    if (!user) {
      setHeader(notloggedin);
    }
  }, [user]);

  return header;
}
