import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    palette: {
        primary: {main: "#EFE7E2"},
        secondary: {main: "#af795d"},
        background: {
            default: "#EEEFEF",
            alternative: "#EFE7E2",
            dark: "#102b53",
            paper: "#FFFEFF",
            transparent: "rgba(255,255,255,0.1)"
        },
        text: {
            primary: "#000000",
            secondary: "#999999",
            accent: "#f5732a",
            darkPrimary: "#ffffff",
            darkSecondary: "#fefefe"
        },
        light: {
            secondary: 'rgba(175,121,93,0.3)',
            alternative: "rgba(16,43,83,0.3)",
            accent: "rgba(245,115,42,0.3)"
        },
        icon: {
            border: 'rgba(175,121,93,0.1)',
            background: 'rgba(175,121,93,0.03)',
            secondary: '#af795d'
        },
        colors: {
            accent: "#f5732a"
        },
        mode: "light"
    },
    typography: {
        fontFamily: 'GoogleSans, Lexend, Manrope, Outfit, Urbanist'
    },
    shape: {
        borderRadius: 32
    }
});
const darkTheme = createTheme({
    palette: {
        primary: {main: "#1b2741"},
        secondary: {main: "#af795d"},
        background: {
            default: "#000000",
            alternative: "#0b111e",
            paper: "#202020",
            transparent: "rgba(0,0,0,0.55)",
            dark: "#102b53"
        },
        text: {
            primary: "#ffffff",
            secondary: "#afafaf",
            accent: "#f5732a",
            darkPrimary: "#ffffff",
            darkSecondary: "#fefefe"
        },
        colors: {
            accent: "#f5732a"
        },
        mode: "dark",
        light: {
            secondary: 'rgba(175,121,93,0.3)',
            alternative: "rgba(16,43,83,0.3)",
            accent: "rgba(245,115,42,0.3)"
        },
        icon: {
            border: 'rgba(175,121,93,0.1)',
            background: 'rgba(175,121,93,0.03)',
            secondary: '#af795d'
        },
    },
    typography: {
        fontFamily: 'GoogleSans, Lexend, Manrope, Outfit, Urbanist'
    },
    shape: {
        borderRadius: 32
    }
});

export {lightTheme, darkTheme};