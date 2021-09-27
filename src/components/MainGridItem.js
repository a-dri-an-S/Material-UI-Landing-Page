import { Button, Card, CardMedia, Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    cardMedia: {
        height: 300
    },
    mainItem: {
        padding: theme.spacing(8),
        textAlign: "left"
    },
    mainContainer: {
        paddingTop: 120,
        paddingBottom: 120,
        backgroundColor: "dodgerblue"
    },
    imageCard: {
        margin: 40
    }
}))

const MainGridItem = () => {

    const { cardMedia, mainItem, mainContainer, imageCard } = useStyles();

    return ( 
        <Container className={mainContainer}>
            <Card>
                <Grid container>
                    <Grid 
                        className={mainItem}
                        md={6}
                        item 
                    >
                        <Typography variant="h2">
                            Ever see a dead body?
                        </Typography>
                        <Typography variant="">
                            Do you want to see a dead body?
                        </Typography>
                        <Button color="primary" variant="contained">
                            Sign Up
                        </Button>
                    </Grid>
                    <Grid item md={6}>
                        <Card className={imageCard}>
                            <CardMedia
                                className={cardMedia}
                                image="https://cdn.pixabay.com/photo/2016/09/13/07/35/walking-dead-1666584_960_720.jpg"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}

export default MainGridItem;