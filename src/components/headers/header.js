import {AppBar, Box} from "@mui/material";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import TabletHeader from "./tablet-header";

const Header = () => {
    const [color, setColor] = useState("background.transparent");
    const {pathname} = useLocation();

    useEffect(() => {

        const scroll = () => {
            if (pathname !== "" || pathname !== "/") {
                if (window.scrollY >= window.innerHeight) {
                    setColor("primary")
                } else {
                    setColor("background.transparent");
                }
            }
        }

        window.addEventListener("scroll", scroll);

        return () => window.removeEventListener('scroll', scroll);
    }, []);

    useEffect(() => {
        if (pathname !== "" || pathname !== "/") {
            setColor("primary");
        }
    }, []);

    return (
        <AppBar
            sx={{backgroundColor: color, backdropFilter: "blur(5px)"}}
            variant="elevation"
            square={true}
            elevation={0}>
            <Box sx={{display: {xs: "none", lg: "block"}}}><DesktopHeader/></Box>
            <Box sx={{display: {xs: "none", md: "block", lg: "none"}}}><TabletHeader/></Box>
            <Box sx={{display: {xs: "block", md: "none", lg: "none"}}}><MobileHeader/></Box>
        </AppBar>
    )
}

export default Header;