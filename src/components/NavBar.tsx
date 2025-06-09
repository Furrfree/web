import {Group, Burger, Button} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import logo from "../assets/logo.png";
import routes from "../utils/routes.ts";
import NavBarItem from "./NavBarItem.tsx";
import {useLocation, useNavigate} from "react-router";
import {useTranslation} from "react-i18next";


interface NavBarProps {
    onBurgerClick: () => void;
    opened: boolean
}

export default function NavBar({onBurgerClick, opened}: NavBarProps) {

    const isMobile = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate()
    const location = useLocation()
    const {t, i18n: {changeLanguage, language}} = useTranslation("components", {keyPrefix: "navbar"});

    return (
        <Group
            gap="xl"
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
                        <NavBarItem
                            label={t(link.label)}
                            color={"black"}
                            onClick={() => navigate(link.href)}
                            isActive={location.pathname === link.href}
                        />
                    ))}
                </Group>
            )}

            <Button
                onClick={() => changeLanguage(language === "en" ? "es" : "en")}

            >
                Cambiar idioma
            </Button>

        </Group>
    );
}