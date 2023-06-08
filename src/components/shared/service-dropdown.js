import {Box, Stack} from "@mui/material";
import React, {useState} from "react";
import {ExpandLess, ExpandMoreOutlined} from "@mui/icons-material";

const ServiceDropdown = ({children}) => {
    const [selectedChild, setSelectedChild] = useState(children[0]);
    const [open, setOpen] = useState(false);

    const handleChildSelected = child => {
        setSelectedChild(child);
        setOpen(false);
    }

    return (
        <Stack
            onClick={() => setOpen(!open)}
            sx={{
                backgroundColor: "background.paper",
                borderRadius: 0.5,
                display: "flex",
                cursor: "pointer",
                alignItems: "flex-start",
                justifyContent: "center",
                height: "100%",
            }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: "100%", px: 2}}>
                <Box sx={{display: !open ? "block" : "none"}}>
                    {!open && selectedChild}
                </Box>
                <Box sx={{display: !open ? "block" : "none"}}>
                    {open ?
                        <ExpandLess/> :
                        <ExpandMoreOutlined/>
                    }
                </Box>
            </Stack>
            <Stack sx={{display: open ? "block" : "none", width: "100%"}}>
                {open && (
                    children?.map((child, index) => {
                        return (
                            <Box
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "colors.accent",
                                        transition: "all 300ms ease-out"
                                    },
                                    "&:hover .title, .description": {
                                        transition: "all 300ms ease-out"
                                    },
                                    py: 1,
                                    px: 2
                                }} onClick={() => handleChildSelected(child)} key={index}>
                                {child}
                            </Box>
                        )
                    })
                )}
            </Stack>
        </Stack>
    )
}

export default ServiceDropdown;