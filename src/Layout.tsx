import {AppShell, Burger} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Outlet} from "react-router";
import NavBar from "./components/NavBar.tsx";


export default function Layout() {
    const [opened, {toggle}] = useDisclosure();

    return (
        <AppShell
            header={{height: 60}}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <NavBar/>
            </AppShell.Header>

            <AppShell.Main style={{paddingLeft: 150, paddingRight: 150}}>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
}