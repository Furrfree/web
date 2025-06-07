import StaffCard from "../components/StaffCard.tsx";
import {ActionIcon, Group, SimpleGrid, Stack} from "@mantine/core";
import staff from "../data/about/staff.json";
import Title2 from "../components/texts/Title2.tsx";
import {IconBrandBluesky, IconBrandX} from "@tabler/icons-react";

export default function About() {
    return (
        <Stack align={"center"}>
            <Title2 text="Staff" align="center"/>
            <SimpleGrid
                cols={{base: 1, sm: 2, md: 3}}
                spacing={{base: 10, sm: 'xl'}}
                verticalSpacing={{base: 'md', sm: 'xl'}}
            >
                {staff.map((member) => (
                    <StaffCard
                        name={member.name}
                        position={member.position}
                        imageUrl={member.image}
                    />
                ))}
            </SimpleGrid>
            <Title2 text={"Redes sociales"} align="center"/>
            <SocialNetworks/>
        </Stack>
    );
}


const socials = [
    {
        name: "Bluesky",
        url: "https://bsky.app/profile/furrfree.bsky.social",
        icon: IconBrandBluesky,
    },
    {
        name: "X",
        url: "https://x.com/furrfree",
        icon: IconBrandX
    },
]


function SocialNetworks() {
    return (
        <Group align="center" gap="xl">
            {socials.map((social, idx) => (
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