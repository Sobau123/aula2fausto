import { Box, Container, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";


export default function Header(){
    return(
        <Container>
            <h1>Header</h1>
            <Box flexDirection={"row"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                Meu Site
                <Tabs>
                    <Tab label="Home" value="/" LinkComponent={<Link />} />
                </Tabs>
            </Box>
        </Container>
    )
}