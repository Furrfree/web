import {SimpleGrid, Stack, Text} from "@mantine/core";
import GroupCard from "../components/GroupCard.tsx";
import Title2 from "../components/texts/Title2.tsx";
import groups from "../data/groups/groups.tsx";


export default function Groups() {
    return (
        <Stack>
            <Title2 text="Grupos" align="center"/>
            <Text>
                En furrfree hay diferentes grupos a los que puedes unirte para poder formar parte de esta
                comunidad.
            </Text>
            <SimpleGrid
                cols={{base: 1, xs: 1, sm: 1, md: 2, lg: 3}}
                spacing={{base: 10, sm: 'xl'}}
                verticalSpacing={{base: 'md', sm: 'xl'}}
            >
                {groups.map((group, index) => (
                    <GroupCard
                        key={index}
                        name={group.name}
                        icon={group.icon}
                        imageUrl={`${import.meta.env.BASE_URL}vite.svg`}
                        link={group.link}
                    />
                ))}
            </SimpleGrid>
        </Stack>
    )
}