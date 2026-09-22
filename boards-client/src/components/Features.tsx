import { Container, Stack } from "@mui/material";
import { theme } from "./Theming";


export interface FeaturesProps {
  features: string[]
}


export function Features(props: FeaturesProps) {

  const CreateFeaturesList = props.features.map(feature => {
    return (
      <li>
        <Container style={{ margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h5.fontSize }}>
          {feature}
        </Container>
      </li>
    )
  });


  return (
    <>
      <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
        <Stack>
          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
            FEATURES
          </Container>
          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize, textAlign: "left" }}>
            <ul>
              {CreateFeaturesList}
            </ul>
          </Container>
        </Stack >
      </ Container >
    </>
  )
};
