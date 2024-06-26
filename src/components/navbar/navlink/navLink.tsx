"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './nav-link.module.css';
import {NavLinkProps} from "@/app/interfaces/globalInterfaces";
import {ICONS_MAP} from "@/app/constants/IconMap";

const NavLink: React.FC<NavLinkProps> = ({ item, className }) => {
    const pathName = usePathname();

    return (
        <Link href={item.pathTitle} className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {ICONS_MAP[item.icon]}  {item.menuTitle}
        </Link>
    );
};

export default NavLink;
