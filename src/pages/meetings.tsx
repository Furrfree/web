import {SimpleGrid, Stack, Text} from "@mantine/core";
import Title2 from "../components/texts/Title2.tsx";
import Title3 from "../components/texts/Title3.tsx";
import meetings from "../data/meetings/meetings.ts";
import MeetingCard from "../components/cards/MeetingCard.tsx";


export default function Meetings() {
    return (
        <Stack>
            <Title2 text={"Quedadas"} align="center"/>
            <Title3 text={"¿Como funcionan las KDDs? "}/>
            <Text ta={"justify"}>
                Las quedadas funcionan como en el resto de grupos habituales, se propone un plan, se aprueba y se
                organiza. La diferencia es que aquí se priorizará aquellos en los que no sea necesario pagar para
                participar. En el caso de hacer algo de pago, se intentará reducir lo mínimo posible estos gastos. En el
                grupo de KDDs se comentarán estos temas y una vez aprobada una quedada se publicará en el canal.
            </Text>

            <SimpleGrid
                cols={{base: 1, xs: 1, sm: 1, md: 2, lg: 2}}
                spacing={{base: 10, sm: 'xl'}}
                verticalSpacing={{base: 'md', sm: 'xl'}}

            >
                {meetings.map((meeting, index) => (
                    <MeetingCard
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