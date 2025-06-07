import {Title} from "@mantine/core";
import {blue} from "../../theme/colors.ts";


interface Title2Props {
    text: string;
}

export default function Title2({text}: Title2Props) {
    return (
        <Title order={2} style={{ fontWeight: 'bold', color: blue}}>
            {text}
        </Title>
    );
}