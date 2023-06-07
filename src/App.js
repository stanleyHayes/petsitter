import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUI} from "./redux/features/ui/ui-slice";
import {darkTheme, lightTheme} from "./utils/themes";
import {Route, Routes} from "react-router";
import {lazy, Suspense} from "react";

const HomePage  = lazy(() => import("./pages/home/home-page"));
const BecomePetSitterPage  = lazy(() => import("./pages/sitters/become-a-pet-sitter-page"));
const FindPetSitterPage  = lazy(() => import("./pages/sitters/find-a-pet-sitter-page"));


function App() {
    const {theme} = useSelector(selectUI);
    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <CssBaseline enableColorScheme={true}>
                <Routes>
                    <Route path="/" element={<Suspense fallback={null}><HomePage/></Suspense>}/>
                    <Route path="/find-pet-sitter" element={<Suspense fallback={null}><FindPetSitterPage/></Suspense>}/>
                    <Route path="/become-pet-sitter" element={<Suspense fallback={null}><BecomePetSitterPage/></Suspense>}/>
                </Routes>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
