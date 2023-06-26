import { Box, Text } from "@chakra-ui/react";
import icon_Car from "../img/Group 171.png"

export default function Mini_info_Blok(props) {
    return(
        <Box display={"flex"} flexDirection={{base:"column",xl:"unset"}} alignItems={"center"} m={"15px 5px 0 5px"} p={"8px"} justifyContent={"center"} border={"1px solid gray"} borderRadius={"10px"} w={{base:"100%",md:"33%"}}>
            <Box w={{base:"100%",xl:"200px"}} m={"0 10px 0 0"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <img src={icon_Car} alt="" width="70px" />
                <Text display={{base:"inline-block",xl:"none"}} ml={"10px"} fontSize={{base:"1xs", md:"1xl",lg:"2xl"}} fontWeight={"bold"} fontFamily={"sans-serif"} color="#F56E1E">Динамично</Text>
            </Box>
            <Box display={{base:"flex",xl:'inline-block'}} mt={"10px"} alignItems={"center"} justifyContent={"center"} w={{base:"100%",xl:"700px"}}>
                <Text display={{base:"none",xl:"inline-block"}} fontSize={"3xl"} fontWeight={"bold"} fontFamily={"sans-serif"} color="#F56E1E">Динамично</Text>
                <Text w={{base:"70%",md:'100%'}} fontSize={"1xs"} fontFamily={"sans-serif"} textAlign={{base:"center",md:"start"}} color="#6E7191">Мы предлагаем более 15000 наименований запчастей на все виды автотранспортных средств, тракторную и сельхозтехнику, спецтехнику.</Text>
            </Box>
        </Box>
    )
}
