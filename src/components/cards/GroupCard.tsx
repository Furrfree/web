import {Card, Image, Stack, Text} from "@mantine/core";
import type {Icon, IconProps} from "@tabler/icons-react";
import type {ForwardRefExoticComponent, RefAttributes} from "react";
import FurrfreeButton from "../input/furrfreebutton";

interface GroupCardProps {
    name: string;
    imageUrl: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    link: string;
}

export default function GroupCard({name, imageUrl, icon: Icon, link}: GroupCardProps) {
    return (
        <Card radius={"xl"}>
            <Stack align="center" justify="center" p="xs">
                <Image
                    radius={"xl"}
                    src={imageUrl}
                    alt={name}
                    style={{width: '100%', height: 'auto', borderRadius: '8px'}}
                />
                <Icon size={32}/>
                <Text fz="xl" ta="center" c="blue">{name}</Text>
                <FurrfreeButton link={link} text="Unirse" openInNewTab/>
            </Stack>
        </Card>
    )


}