import {Title} from "@mantine/core";


interface Title1Props{
    text:string,
}

export default function Title1({text}:Title1Props){
    return (
        <Title style={{fontWeight: 'bold', color: '#333'}} c="white">
            {text}
        </Title>
    );
}