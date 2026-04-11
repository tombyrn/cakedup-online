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
                {/* TODO FIX TEXT COLOR */}
                <MenuItem><Link href="/photos/birthday" className="font-sans text-gray-400">Birthdays</Link></MenuItem>
                <MenuItem><Link href="/photos/celebrity" className="font-sans text-gray-400">Celebrity</Link></MenuItem>
                <MenuItem><Link href="/photos/graduation" className="font-sans text-gray-400">Graduation</Link></MenuItem>
                <MenuItem><Link href="/photos/shower" className="font-sans text-gray-400">Baby Shower</Link></MenuItem>
                <MenuItem><Link href="/photos/wedding" className="font-sans text-gray-400">Wedding/Engagement</Link></MenuItem>
                <MenuItem><Link href="/photos/pull-apart" className="font-sans text-gray-400">Pull-Apart</Link></MenuItem>
            </Menu>        
        </>
    )
}