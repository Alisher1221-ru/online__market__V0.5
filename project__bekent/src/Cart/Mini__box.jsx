import { GridItem, Text } from "@chakra-ui/react";


export default function Mini__box(props) {
    return(
        <GridItem w='100%' position={"relative"} h='220' display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"15px"} bg={"gray.200"} overflow={"hidden"} >
            <img className="img__Mini__boxs" src={props.img} />
            <Text fontSize={"2xl"} textAlign={"center"} mt={"160px"}>{props.title}</Text>
        </GridItem>
    )
}
