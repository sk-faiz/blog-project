import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {

    const links = [
        // {
        //     id: 1,
        //     title: 'Home',
        //     path: '/'
        // },
        {
            id: 2,
            title: 'Portfolio',
            path: '/portfolio'
        },
        {
            id: 3,
            title: 'Blog',
            path: '/blog'
        },
        {
            id: 4,
            title: 'About',
            path: '/about'
        },
        {
            id: 5,
            title: 'Contact',
            path: '/contact'
        },
        {
            id: 6,
            title: 'Dashboard',
            path: '/dashboard'
        },
    ];

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                Faiz
            </Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link href={link.path} key={link.id}>{link.title}</Link>
                ))}
                <button className={styles.logout}>Login</button>
            </div>
        </div>
    )
}

export default Navbar