import {Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import {RepeatOutlined, ReviewsOutlined, StarOutline, Verified} from "@mui/icons-material";
import currencyFormatter from "currency-formatter";

const PetSitter = ({sitter}) => {
    return (
        <Card elevation={0}>
            <CardContent>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12} md={2}>
                        <CardMedia
                            component="img"
                            src={sitter.image.secure_url}
                            sx={{
                                borderRadius: "100%",
                                objectFit: "cover",
                                width: 150,
                                height: 150,
                                objectPosition: "center"
                            }}
                        />
                    </Grid>
                    <Grid item={true} xs={12} md={8}>
                        <Box>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Box>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Typography variant="body1" sx={{color: "text.primary"}}>
                                            {`${sitter.first_name} ${sitter.last_name[0]}.`}
                                        </Typography>
                                        {sitter.is_verified && (
                                            <Verified sx={{color: "colors.blue", fontSize: 12}} />
                                        )}
                                    </Stack>
                                </Box>
                            </Stack>
                            <Typography variant="body2" sx={{color: "text.secondary", fontSize: 12}}>
                                {sitter.address}
                            </Typography>
                            <Stack direction="row" spacing={2} alignItems="centerr">
                                <Button
                                    sx={{color: "colors.accent"}}
                                    startIcon={<StarOutline sx={{color: "colors.accent"}} />}
                                    size="small" variant="text">
                                    {sitter.average_rating.toFixed(2)}
                                </Button>

                                <Button
                                    sx={{color: "colors.accent"}}
                                    startIcon={<ReviewsOutlined sx={{color: "colors.accent"}} />}
                                    size="small" variant="text">
                                    {`${sitter.reviews_count} reviews`}
                                </Button>

                                <Button
                                    sx={{color: "colors.accent"}}
                                    startIcon={<RepeatOutlined sx={{color: "colors.accent"}} />}
                                    size="small" variant="text">
                                    {`${sitter.bookking_count} repeat orders`}
                                </Button>
                            </Stack>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                {sitter.profile}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={2}>
                        <Box>
                            <Stack direction={{xs: "row", md: "column"}} justifyContent="space-between" spacing={1} alignItems="center">
                                <Typography variant="body2" sx={{color: "text.secondary", fontSize: 10}}>
                                    From
                                </Typography>
                                <Box>
                                    <Typography variant="body1" sx={{color: "text.primary"}}>
                                        {currencyFormatter.format(sitter.charge.amount, {code: sitter.charge.currency})}
                                    </Typography>
                                    <Typography variant="body2" sx={{color: "text.secondary", fontSize: 10}}>
                                        per day
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default PetSitter;