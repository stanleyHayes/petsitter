import Layout from "../../components/shared/layout";
import {useSelector} from "react-redux";
import {selectSitter} from "../../redux/features/sitters/sitters-slice";
import {Box, Button, Container, Grid, LinearProgress, Stack, Typography} from "@mui/material";
import PetSitter from "../../components/shared/pet-sitter";

const FindAPetSitterPage = () => {
    const {sitters, loading} = useSelector(selectSitter);
    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 8}}>
                <Box sx={{py: 4, backgroundColor: "background.default"}}>
                    <Container maxWidth="xl">
                        <Grid container={true} spacing={4}>
                            <Grid item={true} xs={12} md={7}>
                                <Stack spacing={2}>
                                    {sitters.map((sitter, index) => {
                                        return (
                                            <Box key={index}><PetSitter sitter={sitter}/> </Box>
                                        )
                                    })}
                                </Stack>
                            </Grid>
                            <Grid item={true} xs={false} md={5}></Grid>
                        </Grid>
                    </Container>
                </Box>

                <Container sx={{my: 8}}>
                    <Box sx={{p: {xs: 4, md: 6, lg: 8}, backgroundColor: "background.dark", borderRadius: 0.5}}>
                        <Grid container={true} justifyContent="center">
                            <Grid item={true} xs={12} md={6} lg={4} alignSelf="center" justifySelf="center">
                                <Typography
                                    align="center"
                                    variant="h6"
                                    sx={{color: "white", mb: 2, fontWeight: "bold"}}>
                                    Do you have special requirements for you pets?
                                </Typography>
                                <Typography
                                    align="center"
                                    variant="body2"
                                    sx={{color: "white", mb: 0.5, fontSize: 12}}>
                                    Contact us if you find it difficult to choose a pet sitter your own.
                                </Typography>
                                <Typography
                                    align="center"
                                    variant="body2"
                                    sx={{color: "white", fontSize: 12, mb: 2}}>
                                    We will select the best option for you free of charge.
                                </Typography>
                                <Stack direction="row" justifyContent="center">
                                    <Button
                                        variant="contained"
                                        disableElevation={true}
                                        color="secondary"
                                        sx={{
                                            py: 1.5,
                                            textTransform: "none",
                                            borderRadius: 0.25,
                                            width: {xs: "100%", md: "max-content"}
                                        }}>
                                        Yes, I need help
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default FindAPetSitterPage;