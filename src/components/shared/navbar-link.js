import {Link, useLocation} from "react-router-dom";
import {Typography} from "@mui/material";

const NavbarLink = ({path, label}) => {
    const {pathname} = useLocation();
    return (
        <Link to={path} style={{textDecoration: 'none'}}>
            <Typography variant="body2" sx={{color: "text.primary"}}>{label}</Typography>
            {path === pathname && (
                <Typography variant="body2" sx={{color: "secondary.main"}} align="center">
                    &#x2022;
                </Typography>
            )}
        </Link>
    )
}

export default NavbarLink;