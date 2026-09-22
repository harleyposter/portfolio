import { Container, ImageList, ImageListItem, Stack } from "@mui/material";
import { theme } from "./Theming";


export interface DisplayProps {
    images: string[]
    cols: number
    title: string
}


export function ImageDisplay(props: DisplayProps) {
    return (

        <Container style={{ flex: 1, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
            <Stack>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginBottom: 10 }}>
                    {props.title}
                </Container>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>

                    <ImageList sx={{ height: 400, verticalAlign: "text-top" }} cols={props.cols}>
                        {props.images.map((item) => (
                            <ImageListItem key={item}>
                                <img
                                    srcSet={item}
                                    src={item}
                                    alt={"Error loading Screenshot"}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </ Container >
            </Stack>
        </ Container >

    )
};
