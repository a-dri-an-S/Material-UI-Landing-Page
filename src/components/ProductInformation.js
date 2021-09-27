import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
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
                <Grid item>
                    <GridItem 
                        title="so many DEAD bodies!"
                        description="in all sizes, weights and ethnic groups"
                        icon={<ThumbUp />}
                    />
                </Grid>
            </Grid>

        </Container>
    );
}

export default ProductInformation;