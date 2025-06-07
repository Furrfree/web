import {Anchor, Group} from "@mantine/core";
import logo from "../assets/logo.png";
import {useLocation} from "react-router";

export default function NavBar() {
    const location = useLocation();

    const links = [
        {href: `${import.meta.env.BASE_URL}`, label: "Inicio"},
        {href: `${import.meta.env.BASE_URL}groups/`, label: "Grupos"},
        {href: `${import.meta.env.BASE_URL}meetings/`, label: "Quedadas"},
        {href: `${import.meta.env.BASE_URL}about/`, label: "Acerca de"},
    ];

    return (
        <Group
            gap="xl"
            style={{
                background: "linear-gradient(90deg, #7AA5FC 0%, #E072F0 100%)",
            }}
        >
            <img src={logo} alt="Logo" style={{height: "60px"}}/>
            <Group>
                {links.map(link => (
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