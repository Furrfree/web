import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import theme from "./theme.tsx";
import {MantineProvider} from "@mantine/core";
import Index from "./pages";
import Groups from "./pages/groups.tsx";
import Meetings from "./pages/meetings.tsx";
import About from "./pages/about.tsx";
import Errors from "./pages/Errors.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Errors/>, // Root-level error element
        children: [
            {path: "", Component: Index},
            {path: "groups", Component: Groups},
            {path: "meetings", Component: Meetings},
            {path: "about", Component: About},

        ]
    }
]);


createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme} defaultColorScheme="dark">
        <RouterProvider router={router}/>
    </MantineProvider>
)
