import {AppShell, Button, Stack} from "@mantine/core";
import NavBar from "./components/NavBar.tsx";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import AnimatedOutlet from "./main.tsx";
import routes from "./utils/routes.ts";
import {useNavigate} from "react-router";

export default function Layout() {
    const isMobile = useMediaQuery('(max-width: 48em)');
    const [opened, { toggle}] = useDisclosure(false);
    const navigate = useNavigate()


    return (
        <AppShell
            header={{height: 60}}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: {mobile: !opened , desktop: true},
            }}
            padding="md"
            w={"100vw"}
        >
            <AppShell.Header>
                <NavBar onBurgerClick={toggle} opened={opened} />
            </AppShell.Header>
            <AppShell.Navbar>
                <Stack>
                    {routes.map(link => (
                        <Button
                            variant="transparent"
                            key={link.href}
                            size="xl"
                            style={{
                                color: "white",
                                textDecoration: location.pathname === link.href ? "underline" : "none",
                            }}
                            onClick={() => navigate(link.href)}
                        >
                            {link.label}
                        </Button>
                    ))}
                </Stack>

            </AppShell.Navbar>
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