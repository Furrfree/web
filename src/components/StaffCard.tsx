import {Card, Group, Stack, Text} from "@mantine/core";

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
                    src={imageUrl}
                    alt="Staff Member"
                    style={{width: 80, height: 80, objectFit: "cover", borderRadius: "50%", marginRight: 16}}
                />
                <Stack>
                    <Text fz={"xl"}>{name}</Text>
                    <Text size="sm" c="dimmed">{position}</Text>
                </Stack>
            </Group>
        </Card>
    );
}