import { Box, Button,Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Mini__box from "./Mini__box";
import Block__Cart from "./Block__Cart";
import Mini_info_Blok from "./Mini__Info_Blok";
import { useState } from "react";
import Contend from "./Content"
import RTX from "../img/HERO.png"

export default function Cart() {

    let [Content, setContent] = useState(true)

    return(
        <Box p={{base:"0 15px",md:"0 50px",lg:"0 100px"}} >

            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.ytimg.com/vi/fj245xMr-BM/maxresdefault.jpg" class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ytimg.com/vi/fj245xMr-BM/maxresdefault.jpg" class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ytimg.com/vi/fj245xMr-BM/maxresdefault.jpg" class="d-block w-100" alt="" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <Text fontSize={{base:"2xl", md:"3xl"}} fontWeight={"bold"} color={"gray.600"} mt={"50px"}>Популярные категории</Text>

            <Grid mt={"20px"} templateColumns={{base:'repeat(1, 3fr)',sm:'repeat(2, 3fr)',lg:'repeat(3, 3fr)',xl:'repeat(4, 3fr)', "2xl":'repeat(6, 3fr)'}} gap={10}>
                <Mini__box title="RTX 4090" img={RTX}/>
                <Mini__box title="RTX 4090" img={RTX}/>
                <Mini__box title="RTX 4090" img={RTX}/>
                <Mini__box title="RTX 4090" img={RTX}/>
                <Mini__box title="RTX 4090" img={RTX}/>
                <Mini__box title="RTX 4090" img={RTX}/>
            </Grid>

            <Flex h={"350px"} mt={"50px"} overflow={"hidden"} alignItems={"center"} justifyContent={"center"} borderRadius={"20px"}>
                <img className="img__cart" src="https://wallpapershome.com/images/wallpapers/nvidia-titan-rtx-3840x2160-graphics-card-4k-20961.jpg" />
            </Flex>

            <Box mt={'60px'}>
                <Text fontSize={{base:"2xl", md:"3xl"}} fontWeight={"bold"} color={"gray.600"}>Автозапчасти к технике</Text>
                <Grid mt={"20px"} templateColumns={{base:'repeat(1, 3fr)',sm:'repeat(2, 3fr)',lg:'repeat(3, 3fr)',xl:'repeat(4, 3fr)', "2xl":'repeat(7, 3fr)'}} gap={10}>
                    <Mini__box title="RTX 4090" img={RTX}/>
                    <Mini__box title="RTX 4090" img={RTX}/>
                    <Mini__box title="RTX 4090" img={RTX}/>
                    <Mini__box title="RTX 4090" img={RTX}/>
                    <Mini__box title="RTX 4090" img={RTX}/>
                    <Mini__box title="RTX 4090" img={RTX}/>
                    <Mini__box title="RTX 4090" img={RTX}/>
                </Grid>
            </Box>

            <Box mt={'60px'}>
                <Text fontSize={"3xl"} fontWeight={"bold"} color={"gray.600"}>Хиты продаж</Text>
                <Grid mt={"20px"} templateColumns={{base:'repeat(1, 3fr)',md:'repeat(2, 3fr)',lg:'repeat(3, 3fr)',xl:'repeat(4, 3fr)', "2xl":'repeat(6, 3fr)'}} gap={5}>
                    <Block__Cart/>
                    <Block__Cart/>
                    <Block__Cart/>
                    <Block__Cart/>
                    <Block__Cart/>
                    <Block__Cart/>
                </Grid>
            </Box>

            <Flex h={"350px"} mt={"60px"} overflow={"hidden"} alignItems={"center"} justifyContent={"center"} borderRadius={"20px"}>
                <img className="img__cart" src="https://wallpapershome.com/images/wallpapers/nvidia-titan-rtx-3840x2160-graphics-card-4k-20961.jpg" />
            </Flex>
            
            <Box m={"50px 0"} display={"flex"} flexDirection={{base:"column", md:"unset"}}>  
                <Mini_info_Blok title="lorem adfa fafg aesfsef asef"/> 
                <Mini_info_Blok/> 
                <Mini_info_Blok/> 
            </Box>

            <Text fontSize={"3xl"} m={"0 0 20px 0"} fontWeight={"bold"} color={"gray.600"}>Оптовая продажа автотракторных запчастей </Text>

            <Box bg={"gray.100"} borderRadius={"5px"} w={"100%"} h={Content ? "80px" : "auto"} position={"relative"}  overflow={"hidden"}>
                <Text lineHeight={"26px"} p={"10px"} fontSize={"1xs"} fontWeight={"medium"} fontFamily={"mono"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, accusamus neque nemo placeat nesciunt facere provident tempora reiciendis perferendis, ratione vel iste nihil non aspernatur quam ducimus <br /><br /> dolorum dicta mollitia officiis sequi at necessitatibus ipsa pariatur fugit. Tempora officiis, perferendis rem dolor accusamus placeat quam aliquam <br /> quaerat magnam perspiciatis impedit. Aperiam mollitia id nihil ab error modi similique sed molestiae!</Text>
                <Box display={Content ? "flex" : "none"} className="Linia_GR"></Box>
            </Box>

            <Box>
                <Button onClick={() => {Content ? setContent(false) : setContent(true)}} m={"10px auto 20px"} display={"block"} variant={"outline"}>Читать далее</Button>
            </Box>

            <Contend/>
        </Box>
    )
}
