import {Link, useLocation} from "react-router-dom";
import {Box, Typography} from "@mui/material";

const NavbarLink = ({path, label}) => {
    const {pathname} = useLocation();
    return (
        <Box sx={{position: "relative"}}>
            <Link to={path} style={{textDecoration: 'none'}}>
                <Typography variant="body2" sx={{color: "text.primary"}}>{label}</Typography>
                {path === pathname && (
                    <Typography variant="body2" sx={{color: "secondary.main", position: "absolute", bottom: 0}} align="center">
                        &#x2022;
                    </Typography>
                )}
            </Link>
        </Box>
    )
}

export default NavbarLink;