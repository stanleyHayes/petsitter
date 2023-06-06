import {Box, Card, CardContent, Stack, Typography} from "@mui/material";

const Guarantee = ({icon, title, description}) => {
    return (
        <Card sx={{backgroundColor: "background.transparent", height: "100%"}} elevation={0} variant="elevation">
            <CardContent>
                <Stack spacing={4}>
                    {icon}
                    <Box>
                        <Stack spacing={1}>
                            <Typography variant="body1" sx={{color: "text.primary", fontWeight: "bold"}}>
                                {title}
                            </Typography>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>{description}</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Guarantee;