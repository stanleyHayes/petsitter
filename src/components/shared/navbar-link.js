import {Link, useLocation} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch} from "react-redux";

const NavbarLink = ({path, label}) => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(UI_ACTION_CREATORS.toggleDrawer());
    }
    return (
        <Box sx={{position: "relative"}}>
            <Link to={path} style={{textDecoration: 'none'}} onClick={handleClick}>
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