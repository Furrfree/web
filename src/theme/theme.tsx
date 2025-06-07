import {ActionIcon, Button, createTheme, type MantineTheme, rem} from "@mantine/core";
import classes from "./button.module.css"

const theme = createTheme({
    primaryColor: "blue",
    colors: {
        "blue": ["#7AA5FC", "#6A8DE0", "#5A76C4", "#4B60A8", "#3C498C", "#2D3270", "#1E1B54", "#0F0438", "#00001C", "#000000"],
        "pink": ["#E072F0", "#D05CD9", "#B946C2", "#A130AB", "#8C1A94", "#7A147D", "#680E66", "#56084F", "#440233", "#32001C"],
        "surface": ["#1E1F25", "#1A1B20", "#16171B", "#121315", "#0E0F10", "#0A0B0C", "#060708", "#020203", "#000000", "#000000"],
    },
    headings: {
        sizes: {
            h1: {fontSize: rem(80), lineHeight: "1.2"},
            h2: {fontSize: rem(50), lineHeight: "1.2"},
            h3: {fontSize: rem(24), lineHeight: "1.2"},
            h4: {fontSize: rem(20), lineHeight: "1.2"},
            h5: {fontSize: rem(18), lineHeight: "1.2"},
            h6: {fontSize: rem(16), lineHeight: "1.2"},
        }
    },
    components: {
        Button: Button.extend({
            classNames: classes,
        }),
        Card: {
            styles: (theme: MantineTheme) => ({
                root: {
                    backgroundColor: theme.colors.surface[0], // or any color you want
                },
            }),
        },
        ActionIcon:ActionIcon.extend({
            styles:{
                root: {
                    border: `0px`,
                },
            }
        })
    },
    /** Your theme override here */
});


export default theme;