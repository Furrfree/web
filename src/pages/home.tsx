import {Group, Image, Space, Stack, Text} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import logo from "../assets/logo.png";
import Title2 from "../components/texts/Title2";
import Title1 from "../components/texts/Title1";
import {useTranslation} from "react-i18next";


export default function Home() {
    const isMobile = useMediaQuery('(max-width: 48em)'); // Mantine's 'sm' breakpoint
    const {t} = useTranslation("pages", {keyPrefix: "home"});

    return (
        <Stack>
            {isMobile ? (
                <Stack align="center" gap="md">
                    <Image src={logo} alt="Logo" height="200px" fit="contain"/>
                    <Title1 text={"Furrfree"}/>
                    <Text ta="justify" fz="xl" lh="xl">
                        {t("text1")}
                    </Text>

                </Stack>
            ) : (
                <>
                    <Space h="100px"/>
                    <Group align="center" grow gap="xl">
                        <Stack style={{height: '300px'}}>
                            <Title1 text={"Furrfree"}/>
                            <Text ta="justify" fz="xl" lh="xl">
                                {t("description")}
                            </Text>
                        </Stack>
                        <Image src={logo} alt="Logo" height="300px" fit="contain"/>
                    </Group>

                </>
            )}
            <Title2 text={t("title1")}/>
            <Text fz="md" ta="justify">
                {t("text1")}
            </Text>
        </Stack>
    );
}