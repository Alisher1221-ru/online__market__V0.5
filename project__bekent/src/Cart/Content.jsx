import { Box, Button, Text } from "@chakra-ui/react"
import Gl__icon from "../img/Vector.png";
import icon__radio from "../img/Ellipse 9.png"
import { useState } from "react";

function Contend() {
    let [Radio, setRadio] = useState(true)
    let [Radio1, setRadio1] = useState(true)
    let [Radio2, setRadio2] = useState(true)


    let [Input, setInput] = useState("")

    function SignUp(e) {
        setInput(e)
    }
    function Btn_Chande() {
        setInput("")
    }

    return(
    <Box w={"100%"} p={"20px"} minH={"200px"} m={"50px 0"} bg={"#FDE9DE"} display={"flex"} justifyContent={"space-between"} flexDirection={{base:'column',xl:"unset"}} alignItems={"center"} borderRadius={"10px"} border={"1px solid rgba(130, 120, 140, 0.492)"}>
        <Box w={{base:"100%", xl:"52%"}} h={{base:"100px", xl:"100px"}} display={"flex"}  justifyContent={"center"} flexDirection={"column"}>
        <Text fontSize={{base:"1xl", md:"2xl"}} textAlign={{base:"center", xl:"start"}} m={"0 0 20px 0"} fontFamily={"sans-serif"} fontWeight={"bold"} color={"gray.600"}>Выберите категорию рассылки</Text>
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Box display={"flex"} flexDirection={{base:"column",sm:"unset"}} textAlign={{base:"center",sm:"start"}} alignItems={"center"} justifyContent={"center"}>
                    <img onClick={() => Radio ? setRadio(false) : setRadio(true)} src={Radio ? Gl__icon : icon__radio} alt="" />
                    <Text ml={"10px"} color={Radio ? "#F56E1E" : "#6E7191"} fontSize={{base:"11px", sm:"12px", md:"14px"}} fontWeight={"medium"} fontFamily={"sans-serif"}>Электронная версия <br /> каталога продукции</Text>
                </Box>
                <Box display={"flex"} flexDirection={{base:"column",sm:"unset"}} textAlign={{base:"center",sm:"start"}} alignItems={"center"} justifyContent={"center"}>
                    <img onClick={() => Radio1 ? setRadio1(false) : setRadio1(true)} src={Radio1 ? Gl__icon : icon__radio} alt="" />
                    <Text ml={"10px"} color={Radio1 ? "#F56E1E" : "#6E7191"} fontSize={{base:"11px", sm:"12px", md:"14px"}} fontWeight={"medium"} fontFamily={"sans-serif"}>Электронная версия <br /> каталога продукции</Text>
                </Box>
                <Box display={"flex"} flexDirection={{base:"column",sm:"unset"}} textAlign={{base:"center",sm:"start"}} alignItems={"center"} justifyContent={"center"}>
                    <img onClick={() => Radio2 ? setRadio2(false) : setRadio2(true)} src={Radio2 ? Gl__icon : icon__radio} alt="" />
                    <Text ml={"10px"} color={Radio2 ? "#F56E1E" : "#6E7191"} fontSize={{base:"11px", sm:"12px", md:"14px"}} fontWeight={"medium"} fontFamily={"sans-serif"}>Электронная версия <br /> каталога продукции</Text>
                </Box>
            </Box>
        </Box>       
        <Box w={{base:"100%", xl:"45%"}} h={{base:"100px", xl:"100px"}} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <input className="Input__Signup" value={Input} type="text" placeholder="Введите Ваш e-mail" onChange={(e) => SignUp(e.target.value)}/>
            <button onClick={() => Btn_Chande()} className="btn__Content">Подписаться</button>
        </Box>
    </Box>
    )
}

export default Contend
