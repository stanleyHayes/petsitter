import {Avatar, Box, CardMedia, Container, Grid, MenuItem, Select, Stack, Toolbar} from "@mui/material";
import whiteLogo from "./../../assets/images/logo-white.png";
import coloredLogo from "./../../assets/images/logo-colored.png";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {
    DarkModeOutlined,
    FavoriteBorderOutlined,
    LightModeOutlined,
    MailOutline,
    MenuOutlined
} from "@mui/icons-material";
import Profile from "../shared/profile";

const TabletHeader = () => {
    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();
    return (
        <Toolbar>
            <Container maxWidth="xl">
                <Grid container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true} xs="auto">
                        <Stack spacing={2} alignItens="center" direction="row" alignItems="center">
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

                            {theme === "dark" && (
                                <CardMedia
                                    component="img"
                                    sx={{height: 70, objectFit: "contain", width: 150}}
                                    src={whiteLogo}
                                />
                            )}
                            {theme === "light" && (
                                <CardMedia
                                    component="img"
                                    sx={{height: 70, objectFit: "contain", width: 150}}
                                    src={coloredLogo}
                                />
                            )}
                        </Stack>
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
                                        cursor: "pointer",
                                    }}
                                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                />
                            )}
                            {theme === 'light' && (
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
                            )}
                            <Profile image={<Avatar sx={{width: 30, height: 30}}/>} name="Inigo Lopez"/>
                            <Select sx={{borderRadius: 0.15}} value="EN" variant="outlined" size="small">
                                <MenuItem value="EN">En</MenuItem>
                                <MenuItem value="DE">De</MenuItem>
                            </Select>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
    )
}

export default TabletHeader;