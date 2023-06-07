import {Box, Container, Stack} from "@mui/material";
import NavbarLink from "./navbar-link";

const DrawerContent = () => {
    return (
        <Box sx={{py: 4}}>
            <Container>
                <Stack direction="column"  spacing={2}>
                    <NavbarLink label="Home" path="/"/>
                    <NavbarLink label="Find a pet sitter" path="/find-pet-sitter"/>
                    <NavbarLink label="Become a pet sitter" path="/become-pet-sitter"/>
                    <NavbarLink label="Help" path="/help"/>
                </Stack>
            </Container>
        </Box>
    )
}


export default DrawerContent