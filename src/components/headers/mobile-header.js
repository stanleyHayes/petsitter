import {Avatar, Grid, Stack, Toolbar} from "@mui/material";
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
import {selectAuth} from "../../redux/features/authentication/authentication-slice";

const MobileHeader = () => {
    const dispatch = useDispatch();
    const {theme} = useSelector(selectUI);
    const {data} = useSelector(selectAuth);
    return (
        <Toolbar>
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
                            <Profile image={<Avatar src={data.image.secure_url} sx={{width: 30, height: 30}}/>}/>
                        </Stack>
                    </Grid>
                </Grid>
        </Toolbar>
    )
}

export default MobileHeader;