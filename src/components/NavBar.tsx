import {Button, Group, Burger} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import logo from "../assets/logo.png";
import {useLocation, useNavigate} from "react-router";
import routes from "../utils/routes.ts";


interface NavBarProps {
    onBurgerClick: () => void;
    opened: boolean
}

export default function NavBar({onBurgerClick, opened}: NavBarProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Group
            gap="xs"
            style={{
                background: "linear-gradient(90deg, #7AA5FC 0%, #E072F0 100%)",
            }}
            justify={isMobile ? "space-between" : "flex-start"}
        >
            <img src={logo} alt="Logo" style={{height: "60px"}}/>
            {isMobile ? (
                <Burger opened={opened} onClick={() => onBurgerClick()} style={{paddingRight: 50}}/>
            ) : (
                <Group>
                    {routes.map(link => (
                        <Button
                            variant="big"
                            key={link.href}
                            style={{
                                color: "black",
                                textDecoration: location.pathname === link.href ? "underline" : "none",
                            }}
                            onClick={() => navigate(link.href)}
                        >
                            {link.label}
                        </Button>
                    ))}
                </Group>
            )}
        </Group>
    );
}