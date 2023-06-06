import {Box, SwipeableDrawer} from "@mui/material";
import Header from "../headers/header";
import Footer from "../footers/footer";
import DrawerContent from "./drawer-content";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const Layout = ({children}) => {
    const {drawerOpen} = useSelector(selectUI);
    const dispatch = useDispatch();
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            maxWidth: "100vw",
            backgroundColor: "background.default"
        }}>
            <Box>
                <Header/>
            </Box>
            <Box sx={{flexGrow: 1}}>
                {children}
            </Box>
            <Box>
                <Footer/>
            </Box>

            <SwipeableDrawer
                open={drawerOpen}
                onClose={() => dispatch(UI_ACTION_CREATORS.toggleDrawer())}
                onOpen={() => dispatch(UI_ACTION_CREATORS.toggleDrawer())}>
                <DrawerContent/>
            </SwipeableDrawer>
        </Box>
    )
}

export default Layout;