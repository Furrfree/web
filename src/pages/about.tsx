import StaffCard from "../components/cards/StaffCard.tsx";
import {ActionIcon, Group, SimpleGrid, Stack} from "@mantine/core";
import Title2 from "../components/texts/Title2.tsx";
import socialNetworks from "../data/about/socialNetworks.ts";
import staff from "../data/about/staff.ts";
import {useTranslation} from "react-i18next";

export default function About() {
    const {t} = useTranslation(["pages", "staff"]);

    return (
        <Stack align={"stretch"}>
            <Title2 text={t("about.title", {ns: "pages"})} align="center"/>
            <SimpleGrid
                cols={{base: 1, xs: 1, sm: 1, md: 2, lg: 3}}
                spacing={{base: 10, sm: 'xl'}}
                verticalSpacing={{base: 'md', sm: 'xl'}}
            >
                {staff.map((member) => (
                    <StaffCard
                        name={member.name}
                        position={t(member.name, {ns: "staff"})}
                        imageUrl={member.image}
                    />
                ))}
            </SimpleGrid>
            <Title2 text={t("about.socialNetworks", {ns: "pages"})} align="center"/>
            <SocialNetworks/>
        </Stack>
    );
}


function SocialNetworks() {
    return (
        <Group justify="center" gap="xl">
            {socialNetworks.map((social, idx) => (
                <ActionIcon
                    key={idx}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="transparent"
                    size={100}
                    color={"white"}
                >
                    <social.icon size={100}/>
                </ActionIcon>
            ))}
        </Group>
    );

}