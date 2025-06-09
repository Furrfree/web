import {Divider, Stack, Text} from "@mantine/core";


interface NavBarItemProps {
    label: string;
    onClick: () => void;
    isActive:boolean;
    color: string ;
}

export default function NavBarItem({ label, onClick,isActive, color}: NavBarItemProps) {
    return (
        <Stack onClick={()=>onClick()} gap={"0px"} style={{cursor: "pointer"}} align={"center"}>
            <Text style={{color:color}}>{label}</Text>
            {isActive && (
                <Divider size={"xl"} color={color} style={{borderRadius: "20px", width:"120%"}}/>
            )}
        </Stack>
    )
}