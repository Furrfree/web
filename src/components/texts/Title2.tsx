import {Title} from "@mantine/core";
import {blue} from "../../theme/colors.ts";


interface Title2Props {
    text: string;
    align?: "left" | "center" | "right";
}

export default function Title2({text, align}: Title2Props) {
    return (
        <Title order={2} style={{fontWeight: 'bold', color: blue}} ta={align}>
            {text}
        </Title>
    );
}