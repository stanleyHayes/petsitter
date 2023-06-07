import Layout from "../../components/shared/layout";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Stack, Tab, Tabs,
    Typography,
    useMediaQuery
} from "@mui/material";
import {
    ArrowCircleRightRounded,
    HikingOutlined,
    HiveOutlined,
    HouseOutlined,
    PetsOutlined,
    ReportOutlined,
    ScheduleOutlined,
    SearchOutlined,
    SupportAgentOutlined,
    VerifiedOutlined
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Process from "../../components/shared/process";
import Service from "../../components/shared/service";
import servicesBackground from "./../../assets/images/services-banner.jpg";
import Guarantee from "../../components/shared/guarantee";
import cat from "./../../assets/images/white-cat.jpg";
import banner from "./../../assets/images/banner.jpg";
import SearchForm from "../../components/shared/search-form";
import {getFAQsByCategory} from "../../utils/lib";
import Faq from "../../components/shared/faq";
import {useState} from "react";

const HomePage = () => {
    const sm = useMediaQuery(theme => theme.breakpoints.down("sm"));
    const [active, setActive] = useState("owner");
    return (
        <Layout>
            <Box>
                <Box
                    sx={{
                        minHeight: {xs: "50vh", md: "60vh", lg: "100vh"},
                        borderBottomRightRadius: {xs: 32},
                        borderBottomLeftRadius: {xs: 32},
                        backgroundImage: `url(${banner})`,
                        backgroundColor: "background.transparent",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundBlendMode: "overlay",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Container>
                        <Typography
                            sx={{
                                backgroundImage: "linear-gradient(to right, #af795d , #ffffff)",
                                backgroundClip: "text",
                                fontSize: {xs: 32, md: 44, lg: 72},
                                color: "transparent",
                                mb: 4
                            }}
                            variant="h3" align="center">
                            Find a sitter for your pet
                        </Typography>
                        <SearchForm/>
                    </Container>
                </Box>
                <Box sx={{py: 8, borderBottomRightRadius: "100%", borderBottomLeftRadius: "100%"}}>
                    <Container maxWidth="xl">
                        <Grid spacing={4} container={true} alignItems="center" justifyContent="space-between">
                            <Grid item={true} xs={12} md={5} lg={3}>
                                <Typography variant="body2" sx={{fontSize: 12, mb: 3, color: "secondary.main"}}>
                                    About
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{color: "text.primary", mb: 3, fontSize: {xs: 28, md: 40, lg: 48}}}>
                                    How does Petsitter work
                                </Typography>
                                <Typography variant="body2" sx={{fontSize: 12, mb: 3}}>
                                    3 easy steps will help you ot find professional, who will take care of your pet,
                                    send you report, that you have no worries!
                                </Typography>
                                <Link to="/find-pet-sitter" style={{textDecoration: "none"}}>
                                    <Button
                                        startIcon={
                                            <ArrowCircleRightRounded
                                                sx={{fontSize: 16}}
                                            />}
                                        variant="text"
                                        size="small"
                                        color="secondary"
                                        sx={{textTransform: "none"}}>Start to search for perfect sitter
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item={true} xs={12} md={7} lg={7}>
                                <Box>
                                    <Grid container={true} spacing={2}>
                                        <Grid xs={12} md={6} item={true}>
                                            <Process
                                                icon={
                                                    <SearchOutlined
                                                        sx={{
                                                            borderWidth: 1,
                                                            borderColor: "icon.border",
                                                            borderStyle: "solid",
                                                            backgroundColor: "icon.background",
                                                            fontSize: 48,
                                                            padding: 1,
                                                            color: "icon.secondary",
                                                            borderRadius: "25%"
                                                        }}
                                                    />
                                                }
                                                title="Find a sitter near you"
                                                step={1}
                                                orientation="column"
                                                description="Read verified reviews by pet owners like you and choose a sitter who's a great match for you and your pets"
                                            />
                                        </Grid>
                                        <Grid xs={12} md={6} item={true}>
                                            <Process
                                                icon={
                                                    <ScheduleOutlined
                                                        sx={{
                                                            borderWidth: 1,
                                                            borderColor: "icon.border",
                                                            borderStyle: "solid",
                                                            backgroundColor: "icon.background",
                                                            fontSize: 48,
                                                            padding: 1,
                                                            color: "icon.secondary",
                                                            borderRadius: "25%"
                                                        }}
                                                    />
                                                }
                                                title="Book & pay"
                                                step={2}
                                                orientation="column"
                                                description="Book your sitter through our safe online system, with flexible cancellations in case your plans change"
                                            />
                                        </Grid>
                                        <Grid xs={12} item={true}>
                                            <Process
                                                icon={
                                                    <PetsOutlined
                                                        sx={{
                                                            borderWidth: 1,
                                                            borderColor: "icon.border",
                                                            borderStyle: "solid",
                                                            backgroundColor: "icon.background",
                                                            fontSize: 48,
                                                            padding: 1,
                                                            color: "icon.secondary",
                                                            borderRadius: "25%"
                                                        }}
                                                    />
                                                }
                                                title="Enjoy & relax!"
                                                step={3}
                                                orientation={sm ? "column" : "row"}
                                                description="Book your sitter through our safe online system, with flexible cancellations in case your plans change"
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box sx={{
                    py: 12,
                    backgroundImage: `url(${servicesBackground})`,
                    backgroundColor: "background.alternative",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "overlay",
                    backgroundPosition: "center"
                }}>
                    <Container>
                        <Typography align="center" variant="body2" sx={{color: "secondary.main", fontSize: 12, mb: 3}}>
                            What we suggest for your pets
                        </Typography>
                        <Typography
                            align="center"
                            variant="body2"
                            sx={{
                                color: "text.primary",
                                mb: 4,
                                fontSize: {xs: 32, md: 48, lg: 72}
                            }}>
                            Our Services
                        </Typography>
                        <Grid container={true} spacing={4} justifyContent="center">
                            <Grid item={true} xs={12} md={6} lg={5}>
                                <Box>
                                    <Stack spacing={2}>
                                        <Service
                                            icon={
                                                <HouseOutlined
                                                    sx={{
                                                        borderWidth: 1,
                                                        borderColor: "icon.border",
                                                        borderStyle: "solid",
                                                        backgroundColor: "icon.background",
                                                        fontSize: 48,
                                                        padding: 1,
                                                        color: "icon.secondary",
                                                        borderRadius: "25%"
                                                    }}
                                                />
                                            }
                                            title="Pet-Boarding"
                                            description="Overnight 24/7 care at sitter's own home. Your pets be treated like part of the family in a comfortable environment"
                                        />

                                        <Service
                                            icon={
                                                <HiveOutlined
                                                    sx={{
                                                        borderWidth: 1,
                                                        borderColor: "icon.border",
                                                        borderStyle: "solid",
                                                        backgroundColor: "icon.background",
                                                        fontSize: 48,
                                                        padding: 1,
                                                        color: "icon.secondary",
                                                        borderRadius: "25%"
                                                    }}
                                                />
                                            }
                                            title="Drop-In Visits"
                                            description="Your sitter drops by your home to play with your pets, offer food, and clean the litter box."
                                        />
                                        <Service
                                            icon={
                                                <HikingOutlined
                                                    sx={{
                                                        borderWidth: 1,
                                                        borderColor: "icon.border",
                                                        borderStyle: "solid",
                                                        backgroundColor: "icon.background",
                                                        fontSize: 48,
                                                        padding: 1,
                                                        color: "icon.secondary",
                                                        borderRadius: "25%"
                                                    }}
                                                />
                                            }
                                            title="Dog Walking"
                                            description="Your dog gets a wal around your local area. Fun, active walks for your dog, perfect when you are at work"
                                        />
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item={true} xs={12} md={6} lg={5}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        backgroundColor: "background.transparent",
                                        backdropFilter: "blur(2px)",
                                        height: "100%",
                                        p: {xs: 4, lg: 12, md: 6}
                                    }}>
                                    <CardContent>
                                        <Typography align="center" variant="h6" sx={{color: "text.primary", mb: 2}}>
                                            Trustful & safe professionals
                                        </Typography>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{color: "text.secondary", mb: 4, fontSize: 12}}>
                                            Your pet is in safe hands with their loving, experienced pet sitter.
                                        </Typography>
                                        <Button
                                            fullWidth={true}
                                            variant="contained"
                                            disableElevation={true}
                                            color="secondary"
                                            sx={{py: 2.5, textTransform: "none"}}>
                                            Find a local sitter
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box sx={{py: 12, backgroundColor: "background.dark", borderRadius: {xs: 1}}}>
                    <Container>
                        <Typography align="center" variant="body2" sx={{color: "secondary.main", fontSize: 12, mb: 3}}>
                            Guarantees
                        </Typography>
                        <Typography
                            align="center"
                            variant="body2"
                            sx={{
                                backgroundImage: "linear-gradient(to right, #af795d , #ffffff)",
                                backgroundClip: "text",
                                fontSize: {xs: 32, md: 44, lg: 72},
                                color: "transparent",
                                mb: 4,
                            }}>
                            Why is it safe?
                        </Typography>
                        <Grid container={true} spacing={4} justifyContent="center">
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Guarantee
                                    icon={
                                        <VerifiedOutlined
                                            sx={{
                                                borderWidth: 1,
                                                borderColor: "icon.border",
                                                borderStyle: "solid",
                                                backgroundColor: "icon.background",
                                                fontSize: 48,
                                                padding: 1,
                                                color: "icon.secondary",
                                                borderRadius: "25%"
                                            }}
                                        />
                                    }
                                    title="All sitters pass an identity verification check & training"
                                    description="We check the passport, social networks and other data about the sitter in open sources. Each sitter instructed and tested."
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Guarantee
                                    icon={
                                        <ReportOutlined
                                            sx={{
                                                borderWidth: 1,
                                                borderColor: "icon.border",
                                                borderStyle: "solid",
                                                backgroundColor: "icon.background",
                                                fontSize: 48,
                                                padding: 1,
                                                color: "icon.secondary",
                                                borderRadius: "25%"
                                            }}
                                        />
                                    }
                                    title="The online contract with sitter is concluded"
                                    description="The pet sitter enters into an agreement with the client and undertakes to provide properr care for the pet."
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Guarantee
                                    icon={
                                        <PetsOutlined
                                            sx={{
                                                borderWidth: 1,
                                                borderColor: "icon.border",
                                                borderStyle: "solid",
                                                backgroundColor: "icon.background",
                                                fontSize: 48,
                                                padding: 1,
                                                color: "icon.secondary",
                                                borderRadius: "25%"
                                            }}
                                        />
                                    }
                                    title="Free preliminary meeting with sitter"
                                    description="You can meet the pet sitter on agreement for free before overexposure to get to know each other."
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Guarantee
                                    icon={
                                        <SupportAgentOutlined
                                            sx={{
                                                borderWidth: 1,
                                                borderColor: "icon.border",
                                                borderStyle: "solid",
                                                backgroundColor: "icon.background",
                                                fontSize: 48,
                                                padding: 1,
                                                color: "icon.secondary",
                                                borderRadius: "25%"
                                            }}
                                        />
                                    }
                                    title="Our managers are always on call 24/7"
                                    description="We are always in touch, even at night. We will promptly help if something goes wrong."
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 12}}>
                    <Container maxWidth="xl">
                        <Grid spacing={4} container={true} alignItems="center" justifyContent="space-between">
                            <Grid item={true} xs={12} md={5} lg={3}>
                                <Typography variant="body2" sx={{fontSize: 12, mb: 3, color: "secondary.main"}}>
                                    Reviews
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{color: "text.primary", mb: 3, fontSize: {xs: 28, md: 40, lg: 48}}}>
                                    What pet-owners say about us
                                </Typography>
                                <Typography variant="body2" sx={{fontSize: 12, mb: 3}}>
                                    Read the stories of our happy pet-owners, who already trust us and tried our service
                                </Typography>
                                <Link to="/reviews" style={{textDecoration: "none"}}>
                                    <Button
                                        startIcon={
                                            <ArrowCircleRightRounded
                                                sx={{fontSize: 16}}
                                            />}
                                        variant="text"
                                        size="small"
                                        color="secondary"
                                        sx={{textTransform: "none"}}>
                                        Read m ore stories
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item={true} xs={12} md={7} lg={7}>
                                <Box>
                                    <Grid container={true} spacing={4}>
                                        <Grid xs={12} md={6} item={true}>
                                            <Process
                                                icon={
                                                    <SearchOutlined
                                                        sx={{
                                                            borderWidth: 1,
                                                            borderColor: "icon.border",
                                                            borderStyle: "solid",
                                                            backgroundColor: "icon.background",
                                                            fontSize: 48,
                                                            padding: 1,
                                                            color: "icon.secondary",
                                                            borderRadius: "25%"
                                                        }}
                                                    />
                                                }
                                                title="Find a sitter near you"
                                                step={1}
                                                orientation="column"
                                                description="Read verified reviews by pet owners like you and choose a sitter who's a great match for you and your pets"
                                            />
                                        </Grid>
                                        <Grid xs={12} md={6} item={true}>
                                            <Process
                                                icon={
                                                    <ScheduleOutlined
                                                        sx={{
                                                            borderWidth: 1,
                                                            borderColor: "icon.border",
                                                            borderStyle: "solid",
                                                            backgroundColor: "icon.background",
                                                            fontSize: 48,
                                                            padding: 1,
                                                            color: "icon.secondary",
                                                            borderRadius: "25%"
                                                        }}
                                                    />
                                                }
                                                title="Book & pay"
                                                step={2}
                                                orientation="column"
                                                description="Book your sitter through our safe online system, with flexible cancellations in case your plans change"
                                            />
                                        </Grid>
                                        <Grid xs={12} item={true}>
                                            <Process
                                                icon={
                                                    <PetsOutlined
                                                        sx={{
                                                            borderWidth: 1,
                                                            borderColor: "icon.border",
                                                            borderStyle: "solid",
                                                            backgroundColor: "icon.background",
                                                            fontSize: 48,
                                                            padding: 1,
                                                            color: "icon.secondary",
                                                            borderRadius: "25%"
                                                        }}
                                                    />
                                                }
                                                title="Enjoy & relax!"
                                                step={3}
                                                orientation={sm ? "column" : "row"}
                                                description="Book your sitter through our safe online system, with flexible cancellations in case your plans change"
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Container sx={{my: 8}}>
                    <Box sx={{p: {xs: 4, md: 6, lg: 8}, backgroundColor: "background.dark", borderRadius: 1}}>
                        <Grid container={true} spacing={2} alignItems="center" sx={{position: "relative"}}>
                            <Grid item={true} xs={12} md={2}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: {xs: 150, md: "100%", lg: 150},
                                        objectFit: {xs: "cover"},
                                        width: {xs: 150, md: "100%", lg: 150},
                                        borderWidth: 4,
                                        borderColor: "icon.border",
                                        borderStyle: "solid",
                                        position: {xs: "block", lg: "absolute"},
                                        left: "-10%",
                                        top: "10%",
                                        borderRadius: "100%"
                                    }}
                                    src={cat}
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={5}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "transparent",
                                        fontSize: {xs: 28, md: 44, lg: 60},
                                        backgroundImage: "linear-gradient(to right, #af795d , #ffffff)",
                                        backgroundClip: "text"
                                    }}>
                                    Our Services
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12} md={5}>
                                <Box>
                                    <Typography variant="h6" sx={{color: "white", mb: 2}}>
                                        Do you want to become a sitter?
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{color: "white", mb: 2, fontSize: 12}}>
                                        Take care of pets and get paid for it! Choose your scheduler yourself. Learn
                                        more how to join our team of trustful pet-sitters;
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        disableElevation={true}
                                        color="secondary"
                                        sx={{
                                            py: 2,
                                            textTransform: "none",
                                            borderRadius: 0.25,
                                            width: {xs: "100%", md: "max-content"}
                                        }}>
                                        I want to become a pet-sitter
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

                <Box sx={{py: 8}}>
                    <Container>
                        <Typography align="center" variant="body2" sx={{fontSize: 12, mb: 2, color: "secondary.main"}}>
                            FAQ
                        </Typography>
                        <Typography
                            align="center"
                            variant="h3"
                            sx={{color: "text.primary", mb: 4, fontSize: {xs: 28, md: 40, lg: 48}}}>
                            Do you have any questions?
                        </Typography>

                        <Box sx={{mb: 4}}>
                            <Stack direction="row" justifyContent="center">
                                <Tabs
                                    sx={{mb: 4}}
                                    variant="standard"
                                    orientation="horizontal"
                                    onChange={(event, value) => setActive(value)}
                                    color={active === "sitter" ? "colors.accent" : "secondary.main"}
                                    allowScrollButtonsMobile={true}
                                    visibleScrollbar={true}
                                    textColor="primary"
                                    value={active}>
                                    <Tab
                                        value="owner"
                                        label={<Typography sx={{color: "text.primary", textTransform: "capitalize"}}>
                                            Pet-owner
                                        </Typography>}
                                    />
                                    <Tab
                                        value="sitter"
                                        label={<Typography sx={{color: "text.primary", textTransform: "capitalize"}}>
                                            Pet-sitter
                                        </Typography>}
                                    />
                                </Tabs>
                            </Stack>
                            <Stack spacing={2}>
                                {getFAQsByCategory(active).map((faq, index) => {
                                    return (
                                        <Box key={index}>
                                            <Faq
                                                faq={faq}
                                                backgroundColor={active === "sitter" ? "light.primary" : "light.secondary"}
                                            />
                                        </Box>
                                    )
                                })}
                            </Stack>
                        </Box>

                        <Typography align="center" variant="body2" sx={{fontSize: 12, mb: 1, color: "text.primary"}}>
                            Didn't find what you were looking for?
                        </Typography>
                        <Typography align="center" variant="body2" sx={{fontSize: 12, color: "secondary.main"}}>
                            Explore our FAQ's here
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default HomePage;