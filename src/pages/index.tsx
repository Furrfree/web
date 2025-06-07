import {Group, Image, Space, Stack, Text, Title} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import logo from "../assets/logo.png";

export default function Index() {
    const isMobile = useMediaQuery('(max-width: 48em)'); // Mantine's 'sm' breakpoint

    return (
        <Stack>
            <Space h="100px"/>
            {isMobile ? (
                <Stack align="center" gap="md">
                    <Image src={logo} alt="Logo" height="200px" fit="contain"/>
                    <Title>Furrfree</Title>
                    <Text ta="justify" fz="xl" lh="xl">
                        Somos un proyecto de comunidad para quien busque un lugar sano
                        donde conocer a otros furries, impulsando eventos y quedadas
                        gratuitas en el fandom
                    </Text>

                </Stack>
            ) : (
                <>
                    <Group align="center" grow gap="xl">
                        <Stack style={{height: '300px'}}>
                            <Title>Furrfree</Title>
                            <Text ta="justify" fz="xl" lh="xl">
                                Somos un proyecto de comunidad para quien busque un lugar sano
                                donde conocer a otros furries, impulsando eventos y quedadas
                                gratuitas en el fandom
                            </Text>
                        </Stack>
                        <Image src={logo} alt="Logo" height="300px" fit="contain"/>
                    </Group>

                </>
            )}
            <Title order={2}>Nuestros valores</Title>
            <Text fz="md" ta="justify">
                Grupo destinado a organizar tanto quedadas, como art trades
                (intercambios de arte) en un entorno lo más desmonetizado posible.
                Así intentamos crear un espacio para aquellas personas que quieren
                formar parte de este fandom, pero por motivos económicos no se pueden
                permitir o no quieren destinar medio sueldo a participar en él.
            </Text>
        </Stack>
    );
}