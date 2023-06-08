import {Stack, Typography} from "@mui/material";

const ServiceDropdownItem = ({title, description}) => {
    return (
        <Stack>
            <Typography
                className="title"
                variant="body2"
                sx={{color: "text.primary", fontWeight: "bold"}}>{title}</Typography>
            <Typography
                className="description"
                variant="body2"
                sx={{color: "text.secondary", fontSize: 12}}>{description}</Typography>
        </Stack>
    )
}

export default ServiceDropdownItem;