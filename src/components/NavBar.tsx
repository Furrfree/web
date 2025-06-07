import {Anchor, Group} from "@mantine/core";
import logo from "../assets/logo.png";
import {useLocation} from "react-router";
import routes from "../utils/routes.ts";

export default function NavBar() {
    const location = useLocation();


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
                    <Anchor
                        key={link.href}
                        href={link.href}
                        style={{
                            color: "#000",
                            textDecoration: location.pathname === link.href ? "underline" : "none",
                        }}
                    >
                        {link.label}
                    </Anchor>
                ))}
            </Group>
        </Group>
    );
}