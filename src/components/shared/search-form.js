import {Button, Card, CardContent, Grid} from "@mui/material";
import ServiceDropdown from "./service-dropdown";
import ServiceDropdownItem from "./service-dropdown-item";

const SearchForm = () => {
    return (
        <Card sx={{backgroundColor: "background.transparent", backdropFilter: "blur(5px)"}} elevation={0}>
            <CardContent>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12} md={6} lg={2}>
                        <ServiceDropdown>
                            <ServiceDropdownItem title="Pet-Boarding" description="24/7 stay at sitter's home"/>
                            <ServiceDropdownItem title="House sitting" description="at your home"/>
                            <ServiceDropdownItem title="Drop-in visits" description="Mins 15-min visits in your home"/>
                            <ServiceDropdownItem title="Dog-walking" description="Min 30-min walks with your dog"/>
                        </ServiceDropdown>
                    </Grid>
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
                                width: {xs: "100%", md: "50%", lg: "max-content"},
                                borderRadius: 0.5,
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