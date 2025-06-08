import {AppShell} from "@mantine/core";
import NavBar from "./components/NavBar.tsx";
import {useMediaQuery} from "@mantine/hooks";
import AnimatedOutlet from "./main.tsx";

export default function Layout() {
    const isMobile = useMediaQuery('(max-width: 48em)');
    //const location = useLocation();

    return (
        <AppShell header={{height: 60}} padding="md" w={"100vw"}>
            <AppShell.Header>
                <NavBar/>
            </AppShell.Header>
            <AppShell.Main
                style={{
                    paddingLeft: isMobile ? 50 : 150,
                    paddingRight: isMobile ? 50 : 150,
                }}
            >
                <AnimatedOutlet/>
            </AppShell.Main>
        </AppShell>
    );
}