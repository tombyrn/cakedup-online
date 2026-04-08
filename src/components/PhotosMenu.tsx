"use client"
import { IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function PhotosMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
            <Link href={'/photos/birthday'} className="m-2 mr-0 text-xl hover-pink">
                <div className="m-2 text-xl hover-pink">
                    PHOTOS
                </div>
            </Link>

            <IconButton        
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                disableRipple
            >
                {/* <MenuIcon className="hover-pink"/>
                 */}
                 <div className="hover-pink">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                 </div>

            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <Link href="/photos/birthday"><MenuItem className="font-sans text-gray-400">Birthdays</MenuItem></Link>
                <Link href="/photos/celebrity"><MenuItem className="font-sans text-gray-400">Celebrity</MenuItem></Link>
                <Link href="/photos/graduation"><MenuItem className="font-sans text-gray-400">Graduation</MenuItem></Link>
                <Link href="/photos/shower"><MenuItem className="font-sans text-gray-400">Baby Shower</MenuItem></Link>
                <Link href="/photos/wedding"><MenuItem className="font-sans text-gray-400">Wedding/Engagement</MenuItem></Link>
                <Link href="/photos/pull-apart"><MenuItem className="font-sans text-gray-400">Pull-Apart</MenuItem></Link>
            </Menu>        
        </>
    )
}