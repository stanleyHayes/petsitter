import {Box, Container, Stack} from "@mui/material";
import SidebarLink from "./sidebar-link";

const DrawerContent = () => {
    return (
        <Box sx={{py: 4}}>
            <Container>
                <Stack direction="column"  spacing={2}>
                    <SidebarLink label="Home" path="/"/>
                    <SidebarLink label="Find a pet sitter" path="/find-pet-sitter"/>
                    <SidebarLink label="Become a pet sitter" path="/become-pet-sitter"/>
                    <SidebarLink label="Help" path="/help"/>
                </Stack>
            </Container>
        </Box>
    )
}


export default DrawerContent