import {createRoot} from 'react-dom/client'
import '@mantine/core/styles.css';
import './index.css'
import {BrowserRouter, Route, Routes, useLocation, useOutlet} from "react-router";
import theme from "./theme/theme.tsx";
import {MantineProvider} from "@mantine/core";
import Home from "./pages/home.tsx";
import Groups from "./pages/groups.tsx";
import Meetings from "./pages/meetings";
import About from "./pages/about.tsx";
import Errors from "./pages/Errors.tsx";
import Layout from "./Layout.tsx";
import {AnimatePresence, motion} from "framer-motion";
import Meeting from "./pages/meetings/meeting.tsx";
import "./i18n.ts"

const AnimatedOutlet = () => {
    const outlet = useOutlet();
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            {outlet && (
                <motion.div
                    key={location.pathname}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    {outlet}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme} defaultColorScheme="dark">

        <BrowserRouter>
            <Routes>
                <Route path={import.meta.env.BASE_URL} element={<Layout/>}>
                    <Route
                        index
                        element={
                            <Home/>
                        }
                    />
                    <Route path="groups" element={<Groups/>}/>
                    <Route path="meetings" element={<Meetings/>}/>
                    <Route path="meetings/:id" element={<Meeting/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="*" element={<Errors/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)
export default AnimatedOutlet