import {SimpleGrid, Stack, Text} from "@mantine/core";
import GroupCard from "../components/cards/GroupCard.tsx";
import Title2 from "../components/texts/Title2.tsx";
import groups from "../data/groups/groups.tsx";
import {useTranslation} from "react-i18next";


export default function Groups() {
    const {t} = useTranslation(["pages", "groups"]);

    return (
        <Stack align={"center"}>
            <Title2 text={t("groups.title")} align="center"/>
            <Text>
                {t("groups.description", {ns: "pages"})}
            </Text>
            <SimpleGrid
                cols={{base: 1, xs: 2, sm: 2, md: 2, lg: 3}}
                spacing={{base: "xl"}}
                verticalSpacing={{base: 'xl'}}
                style={{width: '80%'}}
            >
                {groups.map((group, index) => (
                    <GroupCard
                        key={index}
                        name={t(group.id, {ns: "groups"})}
                        icon={group.icon}
                        imageUrl={group.image}
                        link={group.link}
                    />
                ))}
            </SimpleGrid>
        </Stack>
    )
}