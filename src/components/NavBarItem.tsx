import {Divider, Stack, Text} from "@mantine/core";


interface NavBarItemProps {
    label: string;
    onClick: () => void;
    isActive:boolean;
    color: "dark" | "white" ;
}

export default function NavBarItem({ label, onClick,isActive, color}: NavBarItemProps) {
    return (
        <Stack onClick={()=>onClick()} gap={"0px"} style={{cursor: "pointer"}} align={"center"}>
            <Text c={color}>{label}</Text>
            {isActive && (
                <Divider size={"xl"} style={{borderRadius: "20px", width:"120%"}} color={color}/>
            )}
        </Stack>
    )
}