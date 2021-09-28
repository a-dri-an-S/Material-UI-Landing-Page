import { Container, Grid, Typography } from "@material-ui/core";
import PricingOption from "./PricingOption";

const Pricing = () => {
    return ( 
        <Container>
            <Typography variant="h2">
                Pricing
            </Typography>

            <Grid container>
                <Grid lg={4} md={12} sm={12} xs={12} item>
                    <PricingOption
                        title="One Dead Person"
                        price="250"
                        length="Single"
                        description="One dead person to your liking"
                    />
                </Grid>
                <Grid lg={4} md={12} sm={12} xs={12} item>
                <PricingOption
                        title="Two Dead People"
                        price="450"
                        length="Couple"
                        description="Mix and match or make them fight"
                    />
                </Grid>
                <Grid lg={4} md={12} sm={12} xs={12} item>
                <PricingOption
                        title="A family of Dead"
                        price="1000"
                        length="Includes 5 bodies"
                        description="A whole team of dead people"
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Pricing;