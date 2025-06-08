import {Title} from "@mantine/core";
import {pink} from "../../theme/colors.ts";


interface Title3Props {
    text: string;
    align?: "left" | "center" | "right";
}

export default function Title3({text, align}: Title3Props) {
    return (
        <Title order={3} style={{fontWeight: 'bold', color: pink}} ta={align}>
            {text}
        </Title>
    );
}