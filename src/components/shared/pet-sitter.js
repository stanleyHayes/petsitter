import {Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import {FavoriteBorderOutlined, RepeatOutlined, ReviewsOutlined, StarOutline, Verified} from "@mui/icons-material";
import currencyFormatter from "currency-formatter";

const PetSitter = ({sitter}) => {
    return (
        <Card elevation={0} sx={{height: "100%", borderRadius: 0.5}}>
            <CardContent>
                <Grid container={true} spacing={2} alignItems="center">
                    <Grid item={true} xs={12} md={3}>
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
                    </Grid>
                    <Grid item={true} xs={12} md={9}>
                        <Stack spacing={0.5}>
                            <Box>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Box>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <Typography variant="body1" sx={{color: "text.primary"}}>
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
                                <Typography variant="body2" sx={{color: "text.secondary", fontSize: 12}}>
                                    {`${sitter.location.city}, ${sitter.location.street_name}`}
                                </Typography>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={2} alignItems="centerr">
                                    <Button
                                        sx={{color: "colors.accent", fontSize: 12, textTransform: "none"}}
                                        startIcon={<StarOutline sx={{color: "colors.accent"}}/>}
                                        size="small" variant="text">
                                        {sitter.average_rating.toFixed(2)}
                                    </Button>

                                    <Button
                                        sx={{color: "colors.accent", fontSize: 12, textTransform: "none"}}
                                        startIcon={<ReviewsOutlined sx={{color: "colors.accent"}}/>}
                                        size="small" variant="text">
                                        {`${sitter.reviews_count} reviews`}
                                    </Button>

                                    <Button
                                        sx={{color: "colors.accent", fontSize: 12, textTransform: "none"}}
                                        startIcon={<RepeatOutlined sx={{color: "colors.accent"}}/>}
                                        size="small" variant="text">
                                        {`${sitter.booking_count} orders`}
                                    </Button>
                                </Stack>
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{color: "text.secondary", fontSize: 12}}>
                                    {sitter.profile}
                                </Typography>
                            </Box>
                            <Box>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between">
                                    <Box>
                                        <Stack direction="row" spacing={1} alignItems="center ">
                                            <Typography variant="body2" sx={{color: "text.secondary", fontSize: 10}}>
                                                From
                                            </Typography>
                                            <Typography variant="body2" sx={{color: "text.primary"}}>
                                                {currencyFormatter.format(sitter.charge.amount, {code: sitter.charge.currency})}
                                            </Typography>
                                            <Typography variant="body2" sx={{color: "text.secondary", fontSize: 10}}>
                                                per day
                                            </Typography>
                                        </Stack>
                                    </Box>
                                    <Box>
                                        <FavoriteBorderOutlined
                                            sx={{
                                                borderWidth: 1,
                                                borderColor: "icon.border",
                                                borderStyle: "solid",
                                                backgroundColor: "icon.background",
                                                fontSize: 32,
                                                padding: 1,
                                                color: "icon.secondary",
                                                borderRadius: "100%",
                                                cursor: "pointer"
                                            }}
                                        />
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default PetSitter;