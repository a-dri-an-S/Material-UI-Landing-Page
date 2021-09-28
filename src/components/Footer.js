import { Grid, Card, TextField, Button, Typography, Icon, makeStyles } from "@material-ui/core";
import { Facebook, Instagram, YouTube } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    messageForm: {
        margin: 50,
        width: 500
    },
    messageButton: {
        width: "100%"
    },
    companyInformation: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    footer: {
        padding: theme.spacing(6),
        backgroundColor: "#282828",
        color: "white"
    }
}))

const Footer = () => {

    const { messageForm, messageButton, companyInformation, footer } = useStyles();

    return ( 
        <footer className={footer}>
            <Grid container>
                <Grid item lg={6} md={12}>
                    <Card>
                        <form>
                            <TextField 
                                className={messageForm}
                                label="dead bodies?"
                            />
                        </form>
                    </Card>
                    <Button 
                        className={messageButton}
                        variant="contained" 
                        color="primary"
                    >
                        See dead bodies
                    </Button>
                </Grid>
                <Grid
                    className={companyInformation}
                    lg={6}
                    md={12}
                    item
                >
                    <Typography variant="h5">
                        INGSOC
                    </Typography>
                    <Typography>
                        Big Brother is watching you!
                    </Typography>
                    <Grid item>
                        <Icon>
                            <YouTube/>
                        </Icon>
                        <Icon>
                            <Facebook/>
                        </Icon>
                        <Icon>
                            <Instagram/>
                        </Icon>
                    </Grid>
                </Grid>

            </Grid>
        </footer>
    );
}

export default Footer;