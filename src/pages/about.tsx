import StaffCard from "../components/StaffCard.tsx";
import {ActionIcon, Grid, Group, Stack} from "@mantine/core";
import staff from "../data/about/staff.json";
import Title2 from "../components/texts/Title2.tsx";
import {IconBrandBluesky, IconBrandX} from "@tabler/icons-react";

export default function About() {
    return (
        <Stack align="center" gap="xl">
            <Title2 text="Staff"/>
            <Grid>
                {staff.map((member, idx) => (
                    <Grid.Col span={4} key={idx}>
                        <StaffCard
                            name={member.name}
                            position={member.position}
                            imageUrl={member.image}
                        />
                    </Grid.Col>
                ))}
            </Grid>
            <Title2 text={"Redes sociales"}/>
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