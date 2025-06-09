import {SimpleGrid, Stack, Text} from "@mantine/core";
import GroupCard from "../components/cards/GroupCard.tsx";
import Title2 from "../components/texts/Title2.tsx";
import groups from "../data/groups/groups.tsx";


export default function Groups() {
    return (
        <Stack align={"center"}>
            <Title2 text="Grupos" align="center"/>
            <Text>
                En furrfree hay diferentes grupos a los que puedes unirte para poder formar parte de esta
                comunidad.
            </Text>
            <SimpleGrid
                cols={{base: 1, xs: 2, sm: 2, md: 2, lg: 3}}
                spacing={{base: 10}}
                verticalSpacing={{base: 'md'}}
                style={{width: '70%'}}
            >
                {groups.map((group, index) => (
                    <GroupCard
                        key={index}
                        name={group.name}
                        icon={group.icon}
                        imageUrl={group.image}
                        link={group.link}
                    />
                ))}
            </SimpleGrid>
        </Stack>
    )
}