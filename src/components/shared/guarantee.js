import {Box, Card, CardContent, Stack, Typography} from "@mui/material";

const Guarantee = ({icon, title, description}) => {
    return (
        <Card sx={{backgroundColor: "background.dark", height: "100%"}} elevation={0} variant="elevation">
            <CardContent>
                <Stack spacing={4}>
                    {icon}
                    <Box>
                        <Stack spacing={2}>
                            <Typography variant="body1" sx={{color: "white", fontWeight: "bold"}}>
                                {title}
                            </Typography>
                            <Typography variant="body2" sx={{color: "white"}}>{description}</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Guarantee;