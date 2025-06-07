import {Avatar, Card, Group, Stack, Text} from "@mantine/core";
import {blue, pink} from "../theme/colors.ts";

interface StaffCardProps {
    name: string;
    position: string;
    imageUrl: string;
}

export default function StaffCard({name, position, imageUrl}: StaffCardProps) {
    return (
        <Card radius={"lg"} style={{width: '100%'}}>
            <Group>
                <Avatar
                    src={`${import.meta.env.BASE_URL}${imageUrl}`}
                    alt="Staff Member"
                    size="xl"
                />
                <Stack gap={1}>
                    <Text fz="xl" c={blue}>{name}</Text>
                    <Text size="xl" c={pink}>{position}</Text>
                </Stack>
            </Group>
        </Card>
    );
}