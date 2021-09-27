import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { ThumbUp, Build, ThumbDown, Face, VideoLibrary, CardMembership, Public, School, Money } from "@material-ui/icons";
import GridItem from "./GridItem";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 120,
        paddingBottom: 120
    }
}));

const ProductInformation = () => {

    const { mainContainer } = useStyles();

    return ( 
        <Container className={mainContainer}>

            <Typography variant="h2">
                Let me show you a million dead bodies!
            </Typography>

            <Grid container>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="so many DEAD bodies!"
                        description="too many to count"
                        icon={<ThumbUp />}
                    />
                </Grid>

                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="dead bodies from all over the GLOBE"
                        description="in all sizes, weights and ethnic groups"
                        icon={<Build />}
                    />
                </Grid>

                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="...and there's more coming!"
                        description="dropping life flies, daily"
                        icon={<ThumbDown />}
                    />
                </Grid>

            </Grid>
            <Grid container>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="need parts, we have those too!"
                        description="don't take a full body home, take half...or an arm"
                        icon={<Face />}
                    />
                </Grid>

                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="half off missing parts"
                        description="we also have discounted bodies"
                        icon={<VideoLibrary />}
                    />
                </Grid>

                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="We got a live one?"
                        description="Need an air breather? We have top quality live humans"
                        icon={<CardMembership />}
                    />
                </Grid>

            </Grid>
            <Grid container>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="We have ancient, mummified bodies"
                        description="for the nostalgic body snatchers"
                        icon={<Public />}
                    />
                </Grid>

                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="Fresh dead babies"
                        description="the ultimate renewable resource"
                        icon={<School />}
                    />
                </Grid>

                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem 
                        title="All purchases are final sale"
                        description="out the door? it's your problem now"
                        icon={<Money />}
                    />
                </Grid>

            </Grid>
        </Container>
    );
}

export default ProductInformation;