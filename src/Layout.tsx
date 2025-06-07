import {AppShell} from "@mantine/core";
import {Outlet} from "react-router";
import NavBar from "./components/NavBar.tsx";


export default function Layout() {

    return (
        <AppShell
            header={{height: 60}}
            padding="md"
        >
            <AppShell.Header>
                <NavBar/>
            </AppShell.Header>

            <AppShell.Main style={{paddingLeft: 150, paddingRight: 150}}>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
}