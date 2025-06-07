import {Button, Group} from "@mantine/core";
import logo from "../assets/logo.png";
import {useLocation, useNavigate} from "react-router";
import routes from "../utils/routes.ts";

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();


    return (
        <Group
            gap="xl"
            style={{
                background: "linear-gradient(90deg, #7AA5FC 0%, #E072F0 100%)",
            }}
        >
            <img src={logo} alt="Logo" style={{height: "60px"}}/>
            <Group>
                {routes.map(link => (
                    <Button
                        variant="transparent"
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
        </Group>
    );
}