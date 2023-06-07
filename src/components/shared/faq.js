import {Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Typography} from "@mui/material";
import {useState} from "react";
import {ChevronRight} from "@mui/icons-material";

const Faq = ({faq, backgroundColor}) => {
    const {q, a} = faq;
    return (
        <Accordion elevation={0} variant="contained" sx={{backgroundColor, padding: 1}}>
            <AccordionSummary expandIcon={<ChevronRight sx={{color: backgroundColor, borderRadius: 0.25}}/>}>
                <Typography variant="body1" sx={{color: "text.primary", fontWeight: "bold"}}>
                    {q}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1" sx={{color: "text.primary", fontWeight: "bold"}}>
                    {a}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}
export default Faq;