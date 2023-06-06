import {Box, Card, CardContent, Stack, Typography} from "@mui/material";

const Service = ({icon, title, description}) => {
    return (
        <Card sx={{backgroundColor: "background.transparent", height: "100%"}} elevation={0} variant="elevation">
            <CardContent sx={{p: 4}}>
                <Stack spacing={4} direction="row">
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

export default Service;