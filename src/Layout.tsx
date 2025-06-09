import {AppShell, Stack} from "@mantine/core";
import NavBar from "./components/NavBar.tsx";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import AnimatedOutlet from "./main.tsx";
import routes from "./utils/routes.ts";
import {useLocation, useNavigate} from "react-router";
import NavBarItem from "./components/NavBarItem.tsx";

export default function Layout() {
    const isMobile = useMediaQuery('(max-width: 48em)');
    const [opened, {toggle}] = useDisclosure(false);
    const navigate = useNavigate()
    const location = useLocation()


    return (
        <AppShell
            header={{height: 60}}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: {mobile: !opened, desktop: true},
            }}
            padding="md"
            w={"100vw"}
        >
            <AppShell.Header>
                <NavBar onBurgerClick={toggle} opened={opened}/>
            </AppShell.Header>
            <AppShell.Navbar>
                <Stack p={50} align={"center"}>
                    {routes.map(link => (
                        <NavBarItem
                            label={link.label}
                            color={"white"}
                            onClick={() => {
                                toggle()
                                navigate(link.href)
                            }}
                            isActive={location.pathname === link.href}
                        />
                    ))}
                </Stack>

            </AppShell.Navbar>
            <AppShell.Main
                style={{
                    paddingLeft: isMobile ? 50 : 200,
                    paddingRight: isMobile ? 50 : 200,
                }}
            >
                <AnimatedOutlet/>
            </AppShell.Main>
        </AppShell>
    );
}