import StaffCard from "../components/StaffCard.tsx";
import {Grid} from "@mantine/core";
import staff from "../data/about/staff.json";

export default function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p>We are a community-driven platform dedicated to connecting people and fostering collaboration.</p>
            <p>Our mission is to create a space where individuals can share ideas, learn from each other, and build
                meaningful relationships.</p>
            <p>Join us in our journey to make the world a more connected place!</p>
            <Grid>
                {staff.map((member, idx) => (
                    <Grid.Col span={4} key={idx}>
                        <StaffCard
                            name={member.name}
                            position={member.position}
                            imageUrl={member.image}
                        />
                    </Grid.Col>
                ))}
            </Grid>
        </div>
    );
}