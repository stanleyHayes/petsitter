import {Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent} from "@mui/material";
import {useState} from "react";

const Faq = ({question, answer}) => {
    const [open, setOpen] = useState(false);
    return (
        <Accordion elevation={0} variant="contained">
            <AccordionSummary>

            </AccordionSummary>
            <AccordionDetails>

            </AccordionDetails>
        </Accordion>
    )
}
export default Faq;