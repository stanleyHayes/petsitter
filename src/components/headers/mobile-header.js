import {Avatar, Box, Container, Grid, Stack, Toolbar} from "@mui/material";
import NavbarLink from "../shared/navbar-link";
import {
    DarkModeOutlined,
    FavoriteBorderOutlined,
    LightModeOutlined,
    MailOutline,
    MenuOutlined
} from "@mui/icons-material";
import Profile from "../shared/profile";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const MobileHeader = () => {

    const dispatch = useDispatch();
    const {theme} = useSelector(selectUI);

    return (
        <Toolbar>
            <Container maxWidth="xl">
                <Grid container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true} xs="auto">
                        <MenuOutlined
                            onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawer())}
                            sx={{
                                borderWidth: 1,
                                borderColor: "icon.border",
                                borderStyle: "solid",
                                backgroundColor: "icon.background",
                                fontSize: 28,
                                padding: 0.5,
                                color: "icon.secondary",
                                borderRadius: "100%"
                            }}
                        />
                    </Grid>
                    <Grid item={true} xs="auto">
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                            <FavoriteBorderOutlined
                                sx={{
                                    borderWidth: 1,
                                    borderColor: "icon.border",
                                    borderStyle: "solid",
                                    backgroundColor: "icon.background",
                                    fontSize: 32,
                                    padding: 1,
                                    color: "icon.secondary",
                                    borderRadius: "100%"
                                }}
                            />
                            <MailOutline
                                sx={{
                                    borderWidth: 1,
                                    borderColor: "icon.border",
                                    borderStyle: "solid",
                                    backgroundColor: "icon.background",
                                    fontSize: 32,
                                    padding: 1,
                                    color: "icon.secondary",
                                    borderRadius: "100%"
                                }}
                            />
                                {theme === 'dark' && (
                                    <Box>
                                        <LightModeOutlined
                                            sx={{
                                                borderWidth: 1,
                                                borderColor: "icon.border",
                                                borderStyle: "solid",
                                                backgroundColor: "icon.background",
                                                fontSize: 32,
                                                padding: 1,
                                                color: "icon.secondary",
                                                borderRadius: "100%",
                                                cursor: "pointer"
                                            }}
                                            onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                        />
                                    </Box>
                                )}
                                {theme === 'light' && (
                                    <Box>
                                        <DarkModeOutlined
                                            sx={{
                                                borderWidth: 1,
                                                borderColor: "icon.border",
                                                borderStyle: "solid",
                                                backgroundColor: "icon.background",
                                                fontSize: 32,
                                                padding: 1,
                                                color: "icon.secondary",
                                                borderRadius: "100%",
                                                cursor: "pointer"
                                            }}
                                            onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                        />
                                    </Box>
                                )}
                            <Profile image={<Avatar sx={{width: 30, height: 30}}/>} name="Inigo Lopez"/>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
    )
}

export default MobileHeader;