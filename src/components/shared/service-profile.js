import {Box, Stack, Typography} from "@mui/material";
import currencyFormatter from "currency-formatter";

const ServiceProfile = ({service}) => {
    return (
        <Stack>
            <Box>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body2" sx={{color: "text.primary", fontSize: 12}}>
                        {service?.name}
                    </Typography>
                    <Typography variant="body2" sx={{color: "text.primary"}}>
                        {currencyFormatter.format(
                            service?.charge?.amount,
                            {code: service?.charge?.currency}
                        )}
                    </Typography>
                </Stack>
            </Box>
            <Box>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body2" sx={{color: "text.secondary", fontSize: 10}}>
                        {service?.description}
                    </Typography>
                    <Typography variant="body2" sx={{color: "text.secondary", fontSize: 10}}>
                        {`per ${service?.per_period}`}
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    )
}

export default ServiceProfile;