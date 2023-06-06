import {Button, Card, CardContent, Grid} from "@mui/material";

const SearchForm = () => {
    return (
        <Card sx={{backgroundColor: "background.transparent", backdropFilter: "blur(5px)"}} elevation={0}>
            <CardContent>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12} md={6} lg={2}></Grid>
                    <Grid item={true} xs={12} md={6} lg={2}>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={2}></Grid>
                    <Grid item={true} xs={6} md={6} lg={1}></Grid>
                    <Grid item={true} xs={6} md={6} lg={1}></Grid>
                    <Grid item={true} xs={12} md={6} lg={2}>
                        <Button
                            variant="contained"
                            disableElevation={true}
                            sx={{
                                color: "white",
                                backgroundColor: "secondary.main",
                                py: 2,
                                textTransform: "none",
                                width: {xs: "100%", md: "50%", lg: "max-content"}
                            }}>
                            Find a sitter
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default SearchForm;