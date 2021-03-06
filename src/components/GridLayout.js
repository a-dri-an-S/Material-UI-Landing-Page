import { Grid, makeStyles } from "@material-ui/core";
import MainGridItem from "./MainGridItem";
import ProductInformation from "./ProductInformation";
import Pricing from "./Pricing";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: "flex",
        justifyContent: "center"
    }
}));

const GridLayout = () => {

    const { mainContainer } = useStyles();
    
    return ( 
        <Grid className={mainContainer} container >
            <Grid item>
                <MainGridItem/>
            </Grid>
            <Grid item>
                <ProductInformation />
            </Grid>
            <Grid item>
                <Pricing />
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    );
}

export default GridLayout; 