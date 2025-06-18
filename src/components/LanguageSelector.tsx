import {ActionIcon, Menu} from "@mantine/core";
import {IconCheck, IconWorld} from "@tabler/icons-react";
import languages from "../locales/languages.ts";
import "/node_modules/flag-icons/css/flag-icons.min.css";


interface LanguageSelectorProps {
    currentLanguage: string
    changeLanguage: (langId: string) => void;
}

export default function LanguageSelector({currentLanguage, changeLanguage}: LanguageSelectorProps) {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <ActionIcon variant="transparent">
                    <IconWorld/>
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
                {languages.map((lang) => (
                    <Menu.Item
                        rightSection={currentLanguage === lang.id ? <IconCheck/> : null}
                        onClick={() => changeLanguage(lang.id)}
                        leftSection={<span className={lang.flag}/>}
                    >
                        {lang.name}
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    )
}