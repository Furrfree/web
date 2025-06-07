import {Anchor, Group} from "@mantine/core";
import logo from "../assets/logo.png";

export default function NavBar() {
    return (
        <Group
            gap="xl"
            style={{
                background: "linear-gradient(90deg, #7AA5FC 0%, #E072F0 100%)",
            }}
        >
            <img src={logo} alt="Logo" style={{height: "60px"}}/>
            <Group>
                <Anchor href="/" style={{color: "#000"}}>Inicio</Anchor>
                <Anchor href="/groups" style={{color: "#000"}}>Grupos</Anchor>
                <Anchor href="/meetings" style={{color: "#000"}}>Quedadas</Anchor>
                <Anchor href="/about" style={{color: "#000"}}>Acerca de</Anchor>
            </Group>
        </Group>
    );
}