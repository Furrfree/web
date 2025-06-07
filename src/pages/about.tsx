import StaffCard from "../components/StaffCard.tsx";
import {Grid, Stack} from "@mantine/core";
import staff from "../data/about/staff.json";
import Title2 from "../components/texts/Title2.tsx";

export default function About() {
    return (
        <Stack align="center" gap="xl" >
            <Title2 text="Staff" />
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
        </Stack>
    );
}