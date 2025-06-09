import {Group, Burger, Menu, ActionIcon} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import logo from "../assets/logo.png";
import routes from "../utils/routes.ts";
import NavBarItem from "./NavBarItem.tsx";
import {useLocation, useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {IconCheck, IconWorld} from "@tabler/icons-react";
import languages from "../locales/languages.ts";


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

                <Menu shadow="md" width={200}>
                    <Menu.Target>
                        <ActionIcon variant="transparent">
                            <IconWorld/>
                        </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                        {languages.map((lang) => (
                            <Menu.Item
                                leftSection={language === lang.id ? <IconCheck/> : null}
                                onClick={() => changeLanguage(lang.id)}
                            >
                                {lang.name}
                            </Menu.Item>
                        ))}
                    </Menu.Dropdown>
                </Menu>
            )}
        </Group>
    );
}

