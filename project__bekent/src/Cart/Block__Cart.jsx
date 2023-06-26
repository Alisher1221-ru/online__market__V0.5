import { Box, Button, Flex, GridItem, Text } from "@chakra-ui/react";


export default function Block__Cart() {
    return(
        <GridItem p={"10px"} w='100%' h={"100%"} borderRadius={"15px"} bg={"gray.200"} >
            <Box w={"100%"} h={"200px"} borderRadius={"15px"} overflow={"hidden"}>
                <img className="img__cart" src="https://www.cyberpowerpc.com/template/2022/page/NVIDIA/GeForceRTX40Series/images/c1_Diablo.png" />
            </Box>
            <Flex alignItems={"start"} m={"10px 0"}>
                <Text fontSize={"3xl"} fontFamily={"sans-serif"} fontWeight={"bold"}>999999$</Text>
                <Text fontSize={"1xl"} fontFamily={"sans-serif"} ml={"10px"} textDecoration={"line-through"} fontWeight={"light"}>99999$</Text>
            </Flex>
            <Flex alignItems={"start"}>
                <Text fontSize={"1xl"} fontFamily={"sans-serif"} minH={"100px"} maxH={"auto"} fontWeight={"hairline"}>Фара светодиодная дополнительная круглая, направленный свет, 14 диодов, 42W, (115х42х142)</Text>
            </Flex>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"}  mt={'5px'} h={"55px"}>
                <button className="btn__Box">В корзину</button>
            </Box>
        </GridItem>
    )
}
