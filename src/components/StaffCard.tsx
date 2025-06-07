import {Card, Group, Stack, Text} from "@mantine/core";
import {blue, pink} from "../theme/colors.ts";

interface StaffCardProps {
    name: string;
    position: string;
    imageUrl: string;
}

export default function StaffCard({name, position, imageUrl}: StaffCardProps) {
    return (
        <Card radius={"lg"}>
            <Group>
                <img
                    src={`${import.meta.env.BASE_URL}${imageUrl}`}
                    alt="Staff Member"
                    style={{width: 80, height: 80, objectFit: "cover", borderRadius: "50%", marginRight: 16}}
                />
                <Stack gap={1}>
                    <Text fz="xl" c={blue}>{name}</Text>
                    <Text size="xl" c={pink}>{position}</Text>
                </Stack>
            </Group>
        </Card>
    );
}