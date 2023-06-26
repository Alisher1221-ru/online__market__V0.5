import { Box } from "@chakra-ui/react";
import img__icon from "../img/Layer_1.png"

export default function Footer() {
    return(
        <Box bg={"gray.100"} w={"100%"} p={{base:"10px 15px 0",md:"10px 50px 0",lg:"10px 100px 0"}}>
            <Box bg={"gray"} w={"30%"}>
                <img className="Logo__Chor" src={img__icon} alt="" />
            </Box>
        </Box>
    )
}
