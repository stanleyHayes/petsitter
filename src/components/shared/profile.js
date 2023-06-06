import {Box, Menu, MenuItem, Stack, Typography} from "@mui/material";
import React, {useState} from "react";
import {ExpandLess, ExpandMoreOutlined, PetsOutlined} from "@mui/icons-material";
import DropdownLink from "./dropdown-link";

const Profile = ({image, name}) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    }

    const handleOpen = event => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    }

    return (
        <React.Fragment>
            <Stack onClick={handleOpen} sx={{cursor: "pointer"}} direction="row" spacing={1} alignItems="center">
                {image}
                <Box sx={{display: {xs: "none", md: "block"}}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{color: "color.primary"}}>{name}</Typography>
                        {open ?
                            <ExpandLess sx={{fontSize: 12, color: "icon.secondary"}}/> :
                            <ExpandMoreOutlined sx={{fontSize: 12, color: "icon.secondary"}}/>
                        }
                    </Stack>
                </Box>
            </Stack>
            <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
                <MenuItem>
                    <DropdownLink
                        link="/profile"
                        label="Profile"
                        icon={
                            <PetsOutlined
                                sx={{
                                    borderWidth: 1,
                                    borderColor: "icon.border",
                                    borderStyle: "solid",
                                    backgroundColor: "icon.background",
                                    fontSize: 28,
                                    padding: 1,
                                    color: "icon.secondary",
                                    borderRadius: "100%"
                                }}
                            />
                        }
                    />
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default Profile;