import {Stack, Text} from "@mantine/core";
import Title1 from "../components/texts/Title1.tsx";

export default function Errors() {
    return (
        <Stack align={"center"}>
            <Title1 text={"404"}/>
            <Text>Sorry, the page you are looking for does not exist.</Text>
        </Stack>
    );
}