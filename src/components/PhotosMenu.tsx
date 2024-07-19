"use client"
import { IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

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
            <div className="mr-2 flex items-center hover-pink">
                <Link href="/photos/birthdays">
                    PHOTOS
                </Link>
            </div>

            <IconButton 
                className="mr-2 p-2"         
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon className="hover-pink"/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <Link href="/photos/birthdays"><MenuItem>Birthdays</MenuItem></Link>
                <Link href="/photos/anniversary"><MenuItem>Anniversary/Retirement</MenuItem></Link>
                <Link href="/photos/celebrity"><MenuItem>Celebrity</MenuItem></Link>
                <Link href="/photos/graduation"><MenuItem>Graduation</MenuItem></Link>
                <Link href="/photos/holiday"><MenuItem>Holiday</MenuItem></Link>
                <Link href="/photos/religious"><MenuItem>Religious</MenuItem></Link>
                <Link href="/photos/shower"><MenuItem>Baby/Wedding Shower</MenuItem></Link>
                <Link href="/photos/wedding"><MenuItem>Wedding/Groom</MenuItem></Link>
            </Menu>        
        </>
    )
}