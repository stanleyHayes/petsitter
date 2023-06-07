import {Box, CardMedia, Container, Divider, Grid, Link as MUILink, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";
import stripe from "./../../assets/images/stripe.png";
import masterCard from "./../../assets/images/card.png";
import payPal from "./../../assets/images/paypal.png";
import visa from "./../../assets/images/visa.png";

const Footer = () => {
    return (
        <Box sx={{backgroundColor: "background.dark", borderTopRightRadius: 32, borderTopLeftRadius: 32, pt: 8, pb: 3}}>
            <Container maxWidth="xl">
                <Grid sx={{justifyContent: {xs: "center", md: "flex-start"}}} container={true} spacing={4}>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Box>
                            <Typography variant="body2" sx={{color: "white", mb: 4}}>
                                About Petsitters
                            </Typography>
                            <Stack spacing={1}>
                                <Link to="/about" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        About
                                    </Typography>
                                </Link>
                                <Link to="/contact" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        Contact Us
                                    </Typography>
                                </Link>
                                <Link to="/help" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        Help
                                    </Typography>
                                </Link>
                            </Stack>

                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Box>
                            <Typography variant="body2" sx={{color: "white", mb: 4}}>
                                Our services
                            </Typography>
                            <Stack spacing={1}>
                                <Typography component="span" variant="body2" sx={{color: "white"}}>
                                    Pet-Boarding
                                </Typography>

                                <Typography component="span" variant="body2" sx={{color: "white"}}>
                                    Drop-In Visits
                                </Typography>

                                <Typography component="span" variant="body2" sx={{color: "white"}}>
                                    Dog-Walking
                                </Typography>
                            </Stack>

                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Box>
                            <Typography variant="body2" sx={{color: "white", mb: 4}}>
                                Useful info
                            </Typography>
                            <Stack spacing={1}>
                                <Link to="/about" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        Want to become a sitter?
                                    </Typography>
                                </Link>
                                <Link to="/contact" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        Preparing for pet-boarding
                                    </Typography>
                                </Link>
                                <Link to="/help" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        Stories of our sitters
                                    </Typography>
                                </Link>
                            </Stack>

                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Box>
                            <Typography variant="body2" sx={{color: "white", mb: 4}}>
                                More info
                            </Typography>
                            <Stack spacing={1}>
                                <Link to="/about" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        Privacy
                                    </Typography>
                                </Link>
                                <Link to="/contact" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        Statement
                                    </Typography>
                                </Link>
                                <Link to="/help" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        Cookie Policy
                                    </Typography>
                                </Link>
                                <Link to="/help" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        Terms Of Service
                                    </Typography>
                                </Link>
                            </Stack>

                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Box>
                            <Typography variant="body2" sx={{color: "white", mb: 4}}>
                                Payment Methods
                            </Typography>
                            <Grid
                                container={true}
                                spacing={2}
                                alignItems="center">
                                <Grid item={true} xs="auto">
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            objectFit: "contain",
                                            borderRadius: "25%",
                                            borderWidth: 1,
                                            borderColor: "icon.border",
                                            borderStyle: "solid",
                                            padding: 1
                                        }} src={masterCard}
                                    />
                                </Grid>
                                <Grid item={true} xs="auto">
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            objectFit: "contain",
                                            borderRadius: "25%",
                                            borderWidth: 1,
                                            borderColor: "icon.border",
                                            borderStyle: "solid",
                                            padding: 1
                                        }}
                                        src={visa}
                                    />
                                </Grid>
                                <Grid item={true} xs="auto">
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            objectFit: "contain",
                                            borderRadius: "25%",
                                            borderWidth: 1,
                                            borderColor: "icon.border",
                                            borderStyle: "solid",
                                            padding: 1
                                        }}
                                        src={stripe}
                                    />
                                </Grid>
                                <Grid item={true} xs="auto">
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            objectFit: "contain",
                                            borderRadius: "25%",
                                            borderWidth: 1,
                                            borderColor: "icon.border",
                                            borderStyle: "solid",
                                            padding: 1
                                        }}
                                        src={payPal}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Box>
                            <Typography variant="body2" sx={{color: "white", mb: 4}}>
                                Contact us
                            </Typography>
                            <Stack spacing={1}>
                                <MUILink href="tel://+7 499 112-44-550" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        +7 499 112-44-550{" "}
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{color: "white", fontSize: 10}}>
                                            (Moscow)
                                        </Typography>
                                    </Typography>
                                </MUILink>
                                <MUILink href="tel://+7 499 112-44-550" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "white"}}>
                                        +8 800 200-60-57{" "}
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{color: "white", fontSize: 10}}>
                                            (RF)
                                        </Typography>
                                    </Typography>
                                </MUILink>
                                <Stack spacing={1} direction="row" alignItems="center">
                                    <Facebook
                                        sx={{
                                            borderWidth: 1,
                                            borderColor: "icon.border",
                                            borderStyle: "solid",
                                            backgroundColor: "icon.background",
                                            fontSize: 32,
                                            padding: 1,
                                            color: "icon.secondary",
                                            borderRadius: "100%"
                                        }}
                                    />
                                    <Twitter
                                        sx={{
                                            borderWidth: 1,
                                            borderColor: "icon.border",
                                            borderStyle: "solid",
                                            backgroundColor: "icon.background",
                                            fontSize: 32,
                                            padding: 1,
                                            color: "icon.secondary",
                                            borderRadius: "100%"
                                        }}
                                    />
                                    <Instagram
                                        sx={{
                                            borderWidth: 1,
                                            borderColor: "icon.border",
                                            borderStyle: "solid",
                                            backgroundColor: "icon.background",
                                            fontSize: 32,
                                            padding: 1,
                                            color: "icon.secondary",
                                            borderRadius: "100%"
                                        }}
                                    />
                                </Stack>
                            </Stack>

                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{my: 3}} variant="fullWidth" light={true}/>
                <Typography variant="body2" align="center" sx={{color: "white"}}>
                    Petsitters &copy; 2023
                </Typography>
            </Container>
        </Box>
    )
}
export default Footer;