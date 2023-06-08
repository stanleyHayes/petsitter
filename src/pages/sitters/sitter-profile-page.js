import Layout from "../../components/shared/layout";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container, Divider,
    Grid,
    LinearProgress,
    Stack,
    Typography
} from "@mui/material";
import {useSelector} from "react-redux";
import {selectSitter} from "../../redux/features/sitters/sitters-slice";
import {
    FavoriteBorderOutlined,
    HistoryOutlined,
    RepeatOutlined,
    ReviewsOutlined,
    StarOutline,
    Verified
} from "@mui/icons-material";
import ServiceProfile from "../../components/shared/service-profile";

const SitterProfilePage = () => {
    const {sitter, loading} = useSelector(selectSitter);
    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 12}}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4} lg={3}>
                            <Box>
                                <Grid container={true} spacing={4}>
                                    <Grid item={true} xs={12}>
                                        <Stack direction="row" justifyContent="center">
                                            <CardMedia
                                                component="img"
                                                src={sitter.image.secure_url}
                                                sx={{
                                                    borderRadius: "100%",
                                                    objectFit: "cover",
                                                    width: {xs: 150, md: 100, lg: 150},
                                                    height: {xs: 150, md: 100, lg: 150},
                                                    objectPosition: "center"
                                                }}
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item={true} xs={12}>
                                        <Card elevation={0} sx={{borderRadius: 0.25}}>
                                            <CardContent>
                                                <Typography
                                                    sx={{color: "text.primary", fontWeight: "bold", mb: 2}}
                                                    variant="body2">
                                                    {`${sitter?.first_name}'s services`}
                                                </Typography>
                                                <Box>
                                                    <Stack spacing={2}>
                                                        {sitter?.services?.filter(service => service.variant === "main")?.map((service, index) => {
                                                            return (
                                                                <Box key={index}>
                                                                    <ServiceProfile service={service}/>
                                                                </Box>
                                                            )
                                                        })}
                                                    </Stack>

                                                    <Divider sx={{my: 3}} variant="fullWidth" light={true}/>

                                                    <Typography
                                                        sx={{color: "text.primary", fontWeight: "bold", mb: 2}}
                                                        variant="body2">
                                                        Additional services
                                                    </Typography>
                                                    <Stack spacing={2}>
                                                        {sitter?.services?.filter(service => service.variant === "additional")?.map((service, index) => {
                                                            return (
                                                                <Box key={index}>
                                                                    <ServiceProfile service={service}/>
                                                                </Box>
                                                            )
                                                        })}
                                                    </Stack>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item={true} xs={12} md={8} lg={9}>
                            <Stack spacing={2}>
                                <Box>
                                    <Stack spacing={2}>
                                        <Box>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                <Box>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <Typography
                                                            variant="body1"
                                                            sx={{color: "text.primary", fontWeight: "bold"}}>
                                                            {`${sitter.first_name} ${sitter.last_name[0]}.`}
                                                        </Typography>
                                                        {sitter.is_verified && (
                                                            <Verified sx={{color: "colors.blue", fontSize: 12}}/>
                                                        )}
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                                {`${sitter.location.city}, ${sitter.location.street_name}`}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Button
                                                    sx={{color: "text.primary", fontSize: 12, textTransform: "none"}}
                                                    startIcon={<StarOutline sx={{color: "colors.accent"}}/>}
                                                    size="small" variant="text">
                                                    {sitter.average_rating.toFixed(2)}
                                                </Button>

                                                <Button
                                                    sx={{color: "text.primary", fontSize: 12, textTransform: "none"}}
                                                    startIcon={<ReviewsOutlined sx={{color: "colors.accent"}}/>}
                                                    size="small" variant="text">
                                                    {`${sitter.reviews_count} reviews`}
                                                </Button>

                                                <Button
                                                    sx={{color: "text.primary", fontSize: 12, textTransform: "none"}}
                                                    startIcon={<RepeatOutlined sx={{color: "colors.accent"}}/>}
                                                    size="small" variant="text">
                                                    {`${sitter.booking_count} orders`}
                                                </Button>

                                                <Button
                                                    sx={{color: "text.primary", fontSize: 12, textTransform: "none"}}
                                                    startIcon={<HistoryOutlined sx={{color: "colors.accent"}}/>}
                                                    size="small" variant="text">
                                                    {`Response time ${sitter?.metadata?.response_time?.amount} ${sitter?.metadata?.response_time.unit}`}
                                                </Button>
                                            </Stack>
                                        </Box>
                                        <Box>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Button
                                                    variant="contained"
                                                    disableElevation={true}
                                                    color="secondary"
                                                    sx={{
                                                        py: 1,
                                                        textTransform: "none",
                                                        width: {xs: "100%", md: "max-content"}
                                                    }}>
                                                    Make a request to {sitter.first_name}
                                                </Button>
                                                <FavoriteBorderOutlined
                                                    sx={{
                                                        borderWidth: 1,
                                                        borderColor: "icon.border",
                                                        borderStyle: "solid",
                                                        backgroundColor: "icon.background",
                                                        fontSize: 36,
                                                        padding: 1,
                                                        color: "icon.color",
                                                        borderRadius: "100%"
                                                    }}
                                                />
                                            </Stack>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box>

                                </Box>
                                <Box>
                                    <Card elevation={0} sx={{borderRadius: 0.25}}>
                                        <CardContent>
                                            <Typography
                                                sx={{color: "text.primary", fontWeight: "bold", mb: 3}}
                                                variant="body2">
                                                {`About ${sitter?.first_name}`}
                                            </Typography>
                                            <Typography
                                                sx={{color: "text.secondary", mb: 3, fontSize: 12}}
                                                variant="body2">
                                                {sitter?.about}
                                            </Typography>

                                            <Typography
                                                sx={{color: "text.primary", mb: 3}}
                                                variant="body2">
                                                {`${sitter?.first_name}'s special skills`}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default SitterProfilePage;