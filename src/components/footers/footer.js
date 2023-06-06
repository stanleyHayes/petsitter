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
                <Grid sx={{justifyContent: {xs: "center", md: "flex-start"}}} container={true} spacing={2}>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", mb: 2}}>
                                About Petsitters
                            </Typography>
                            <Stack spacing={1}>
                                <Link to="/about" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        About Petsitters
                                    </Typography>
                                </Link>
                                <Link to="/contact" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        Contact Us
                                    </Typography>
                                </Link>
                                <Link to="/help" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        Help
                                    </Typography>
                                </Link>
                            </Stack>

                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", mb: 2}}>
                                Our services
                            </Typography>
                            <Stack spacing={1}>
                                <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                    Pet-Boarding
                                </Typography>

                                <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                    Drop-In Visits
                                </Typography>

                                <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                    Dog-Walking
                                </Typography>
                            </Stack>

                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", mb: 2}}>
                                Useful info
                            </Typography>
                            <Stack spacing={1}>
                                <Link to="/about" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        Want to become a sitter?
                                    </Typography>
                                </Link>
                                <Link to="/contact" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        Preparing for pet-boarding
                                    </Typography>
                                </Link>
                                <Link to="/help" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        Stories of our sitters
                                    </Typography>
                                </Link>
                            </Stack>

                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", mb: 2}}>
                                More info
                            </Typography>
                            <Stack spacing={1}>
                                <Link to="/about" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        Privacy
                                    </Typography>
                                </Link>
                                <Link to="/contact" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        Statement
                                    </Typography>
                                </Link>
                                <Link to="/help" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        Cookie Policy
                                    </Typography>
                                </Link>
                                <Link to="/help" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        Terms Of Service
                                    </Typography>
                                </Link>
                            </Stack>

                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={4} lg={2}>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", mb: 2}}>
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
                            <Typography variant="body2" sx={{color: "text.primary", mb: 2}}>
                                Contact us
                            </Typography>
                            <Stack spacing={1}>
                                <MUILink href="tel://+7 499 112-44-550" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        +7 499 112-44-550{" "}
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{color: "text.secondary", fontSize: 10}}>
                                            (Moscow)
                                        </Typography>
                                    </Typography>
                                </MUILink>
                                <MUILink href="tel://+7 499 112-44-550" style={{textDecoration: "none"}}>
                                    <Typography component="span" variant="body2" sx={{color: "text.secondary"}}>
                                        +8 800 200-60-57{" "}
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{color: "text.secondary", fontSize: 10}}>
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
                <Typography variant="body2" align="center" sx={{color: "text.secondary"}}>
                    Petsitters &copy; 2023
                </Typography>
            </Container>
        </Box>
    )
}
export default Footer;