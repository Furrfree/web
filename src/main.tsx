import {createRoot} from 'react-dom/client'
import '@mantine/core/styles.css';
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import theme from "./theme/theme.tsx";
import {MantineProvider} from "@mantine/core";
import Index from "./pages";
import Groups from "./pages/groups.tsx";
import Meetings from "./pages/meetings.tsx";
import About from "./pages/about.tsx";
import Errors from "./pages/Errors.tsx";
import Layout from "./Layout.tsx";



const router = createBrowserRouter([
    {
        path: import.meta.env.BASE_URL,
        errorElement: <Errors/>, // Root-level error element
        element: <Layout/>,
        children: [
            {path: "", Component: Index},
            {path: `${import.meta.env.BASE_URL}groups`, Component: Groups},
            {path: `${import.meta.env.BASE_URL}meetings`, Component: Meetings},
            {path: `${import.meta.env.BASE_URL}about`, Component: About},
        ]
    }
]);


createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme} defaultColorScheme="dark">
        <RouterProvider router={router}/>
    </MantineProvider>
)
