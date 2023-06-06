import Layout from "../../components/shared/layout";
import {Box, Button, Card, CardContent, CardMedia, Container, Grid, Stack, Tabs, Typography} from "@mui/material";
import banner from "../../assets/images/banner.jpg";
import {Link} from "react-router-dom";
import {
    ArrowCircleRightRounded,
    HikingOutlined,
    HiveOutlined,
    HouseOutlined,
    ScheduleOutlined,
    SearchOutlined
} from "@mui/icons-material";
import Process from "../../components/shared/process";
import servicesBackground from "../../assets/images/services-banner.jpg";
import Service from "../../components/shared/service";
import cat from "../../assets/images/cat.jpg";

const BecomeAPetSitterPage = () => {

    return (
        <Layout>
            <Box>
                <Box
                    sx={{
                        minHeight: {xs: "100vh"},
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
                            Join our team
                        </Typography>
                        <Typography align="center" variant="body2" sx={{fontSize: 12, mb: 3}}>
                            Love animals? Join us and have a fun and flexible way to make money while spending time with
                            lovely pets
                        </Typography>
                        <Grid container={true} justifyContent="center">
                            <Grid item={true} xs={12} md={4}>
                                <Button
                                    fullWidth={true}
                                    variant="contained"
                                    disableElevation={true}
                                    sx={{py: 2.5, textTransform: "none", backgroundColor: "colors.accent", borderRadius: 0.35}}>
                                    Let's get started!
                                </Button>
                            </Grid>
                        </Grid>
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
                                    How you work with Petsitter
                                </Typography>
                                <Typography variant="body2" sx={{fontSize: 12, mb: 3}}>
                                    4 easy steps will help you fill your profile, set up your scheduler and find your
                                    first clients! It is easy, safe and free. You don't have to pay anything before
                                    booking is done.
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
                                        sx={{textTransform: "none"}}>Start to create your profile
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item={true} xs={12} md={7} lg={7}>
                                <Box>
                                    <Grid container={true} spacing={2}>
                                        <Grid xs={12} md={6} item={true}>
                                            <Process
                                                backgroundColor="light.accent"
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
                                                title="Onboarding"
                                                step={1}
                                                orientation="column"
                                                description="Take free online training and testing"
                                            />
                                        </Grid>
                                        <Grid xs={12} md={6} item={true}>
                                            <Process
                                                backgroundColor="light.accent"
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
                                                title="Fill your sitter's profile"
                                                step={2}
                                                orientation="column"
                                                description="Tell us about yourself, your pets, list your services. We will guide you through building a profile"
                                            />
                                        </Grid>
                                        <Grid xs={12} md={6} item={true}>
                                            <Process
                                                backgroundColor="light.accent"
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
                                                title="Decide how you want to work"
                                                step={3}
                                                orientation="column"
                                                description="You choose the pets you can sit with. Set your own schedule and prices."
                                            />
                                        </Grid>
                                        <Grid xs={12} md={6} item={true}>
                                            <Process
                                                backgroundColor="light.accent"
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
                                                title="Get paid!"
                                                step={4}
                                                orientation="column"
                                                description="Simple and secured payments made directly to your bank account after you have completed a service."
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
                            Why is it great to work with Petsitters?
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
                            Advantages
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
                                            title="You set the cost yourself"
                                            description="You choose your own rate. In addition, you can individually increase the cost for sitting that requires special care, or for other objective reasons."
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
                                            title="24/7 support"
                                            description="Our team is on call 24/7 and will help in any situation. Thousands of pets have already visited us - we apply all our experience."
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
                                            title="Safety"
                                            description="Each petsitting is goverened by an online contract. In emergency cases, we provide support to the dog-sitter and the client and help to cope with the problem."
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
                                            I want to take care of pets! How can I apply?
                                        </Typography>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{color: "text.secondary", mb: 4, fontSize: 12}}>
                                            Fill out the form, tell us about yourself, and pass easy test. It will take maximum 15 minutes.
                                        </Typography>
                                        <Button
                                            fullWidth={true}
                                            variant="contained"
                                            disableElevation={true}
                                            sx={{py: 2.5, textTransform: "none", backgroundColor: "colors.accent", borderRadius: 0.20}}>
                                            Apply now
                                        </Button>
                                    </CardContent>
                                </Card>
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
                                        Read more stories
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item={true} xs={12} md={7} lg={7}>
                                <Box>

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
                                        height: {xs: 150, md: "100%"},
                                        objectFit: "cover",
                                        width: {xs: 150, md: "100%"},
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
                                        textAlign: {xs: "left", md: "center"},
                                        color: "transparent",
                                        fontSize: {xs: 28, md: 44, lg: 60},
                                        backgroundImage: "linear-gradient(to right, #af795d , #ffffff)",
                                        backgroundClip: "text"
                                    }}>
                                    Join us!
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12} md={5}>
                                <Box>
                                    <Typography variant="h6" sx={{color: "text.primary", mb: 2}}>
                                        Pets should not be sad while their owners are resting:)
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        disableElevation={true}
                                        sx={{
                                            py: 2,
                                            textTransform: "none",
                                            borderRadius: 0.25,
                                            width: {xs: "100%", md: "max-content"},
                                            backgroundColor: "colors.accent"
                                        }}>
                                        I want to become a petsitter!
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
                            <Tabs>

                            </Tabs>
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

export default BecomeAPetSitterPage;