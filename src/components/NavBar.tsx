import {Group, Burger} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import logo from "../assets/logo.png";
import routes from "../utils/routes.ts";
import NavBarItem from "./NavBarItem.tsx";
import {useLocation, useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import LanguageSelector from "./LanguageSelector.tsx";

interface NavBarProps {
    onBurgerClick: () => void;
    opened: boolean
}

export default function NavBar({onBurgerClick, opened}: NavBarProps) {

    const isMobile = useMediaQuery('(max-width: 48em)');
    const navigate = useNavigate()
    const location = useLocation()
    const {t, i18n: {changeLanguage, language}} = useTranslation("components", {keyPrefix: "navbar"});

    return (
        <Group
            gap="xl"
            style={{
                background: "linear-gradient(90deg, #7AA5FC 0%, #E072F0 100%)",
                paddingRight: isMobile ? "5%" : "2%",
            }}
            justify="space-between"
        >
            <Group>

                <img src={logo} alt="Logo" style={{height: "60px"}}/>
                {isMobile ? (
                    <Burger opened={opened} onClick={() => onBurgerClick()}/>
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
            </Group>

            {!isMobile && (
                <LanguageSelector currentLanguage={language} changeLanguage={changeLanguage}/>
            )}
        </Group>
    );
}

