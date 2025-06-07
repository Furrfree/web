import {AppShell} from "@mantine/core";
import {Outlet} from "react-router";
import NavBar from "./components/NavBar.tsx";
import {useMediaQuery} from "@mantine/hooks";


export default function Layout() {

    const isMobile = useMediaQuery('(max-width: 48em)');


    return (
        <AppShell
            header={{height: 60}}
            padding="md"
            w={"100vw"}
        >
            <AppShell.Header>
                <NavBar/>
            </AppShell.Header>

            <AppShell.Main
                style={{
                    paddingLeft: isMobile ? 50 : 150,
                    paddingRight: isMobile ? 50 : 150,
                }}
            >
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
}