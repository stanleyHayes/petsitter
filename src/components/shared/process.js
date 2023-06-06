import {Box, Card, CardContent, Stack, Typography} from "@mui/material";

const Process = ({icon, step, title, description, orientation, backgroundColor = "light.alternative"}) => {
    return (
        <Card sx={{backgroundColor, height: "100%"}} elevation={0} variant="elevation">
            <CardContent sx={{p: 4}}>
                <Stack spacing={4} direction={orientation}>
                    {icon}
                    <Box>
                        <Stack spacing={2}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Step {step}</Typography>
                            <Typography variant="h6" sx={{color: "text.primary"}}>{title}</Typography>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>{description}</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Process;