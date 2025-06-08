import {useParams} from "react-router";
import meetings from "../../data/meetings/meetings.ts";
import Title2 from "../../components/texts/Title2.tsx";
import {SimpleGrid, Stack, Text} from "@mantine/core";

export default function Meeting() {
    const {id} = useParams<{ id: string }>();
    const meeting = meetings.find(m => String(m.id) === id);

    if (!meeting) {
        return <div>Meeting not found.</div>;
    }

    const images = import.meta.glob('/src/data/meetings/*/*.{png,jpg,jpeg,svg}', {eager: true});
    const imageList = Object.entries(images)
        .filter(([path]) => path.includes(`/meetings/${id}/`))
        .map(([, mod]: any) => mod.default)


    return (
        <Stack>
            <Title2 text={meeting.title} align="center"/>
            <Text>{meeting.description}</Text>
            <SimpleGrid
                cols={{base: 2}}
                spacing={{base: 4}}
                verticalSpacing={{base: 4}}
                style={{height: "100%"}}
            >

                {imageList.map((image: any, index: number) => {
                    return (
                        <img
                            key={index}
                            src={image}
                            alt={`Meeting image ${index + 1}`}
                            style={{width: '100%', height: 'auto', borderRadius: '8px'}}
                        />
                    );
                })}
            </SimpleGrid>
        </Stack>
    );
}