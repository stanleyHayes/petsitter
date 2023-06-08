import Layout from "../../components/shared/layout";
import {useSelector} from "react-redux";
import {selectSitter} from "../../redux/features/sitters/sitters-slice";
import {Box, Container, Grid, LinearProgress, Stack} from "@mui/material";
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
            </Box>
        </Layout>
    )
}

export default FindAPetSitterPage;