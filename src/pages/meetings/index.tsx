import {SimpleGrid, Stack, Text} from "@mantine/core";
import Title2 from "../../components/texts/Title2.tsx";
import Title3 from "../../components/texts/Title3.tsx";
import meetings from "../../data/meetings/meetings.ts";
import MeetingCard from "../../components/cards/MeetingCard.tsx";
import {useTranslation} from "react-i18next";


export default function Index() {
    const {t} = useTranslation("pages", {keyPrefix: "meetings"});

    return (
        <Stack>
            <Title2 text={t('title')} align="center"/>
            <Title3 text={t('title2')}/>
            <Text ta={"justify"}>
                {t('description')}
            </Text>

            <SimpleGrid
                cols={{base: 1, xs: 1, sm: 1, md: 2, lg: 2}}
                spacing={{base: 10, sm: 'xl'}}
                verticalSpacing={{base: 'md', sm: 'xl'}}

            >
                {meetings.map((meeting, index) => (
                    <MeetingCard
                        id={meeting.id}
                        key={index}
                        title={meeting.title}
                        description={meeting.description}
                        date={meeting.date}
                        location={meeting.location}
                    />
                ))}
            </SimpleGrid>
        </Stack>
    )
}