import {Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const DropdownLink = ({icon, link, label }) => {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            {icon}
            <Link to={link} style={{textDecoration: "none"}}>
                <Typography variant="body2" component="span" sx={{color: "text.secondary"}}>
                    {label}
                </Typography>
            </Link>
        </Stack>
    )
}
export default DropdownLink;