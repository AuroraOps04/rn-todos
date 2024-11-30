import {Box, FeatherIcon, Text} from "@/components/atom";
import Masthead from "@/components/masthead";
import NavBar from "@/components/nav-bar";
import {Image} from "react-native";
import LinkButton from "@/components/link-button";

const About = () => {
    return <Box flex={1}>
        <Masthead source={require("@/assets/images/about-masthead.png")} title={"About this app"}>
            <NavBar/>
        </Masthead>
        <Box marginTop={'-lg'} borderTopLeftRadius={20} borderTopRightRadius={20} pb={'lg'} flex={1}
                          bg={'bg'}>
            <Box alignItems={'center'} justifyContent={'center'} my={'hugo'}>
                <Image source={require("@/assets/images/takuya.jpg")} style={{width: 96, height: 96, borderRadius: 100}}
                       resizeMode={'cover'}/>
                <Text mx={'hugo'}>
                    This project is a React Native learning initiative, inspired by a tutorial project by Takuya
                    Matsuyama, a YouTube creator. I’m extremely grateful for his efforts in creating such an excellent
                    project and making it open-source.
                </Text>
            </Box>
            <Box alignItems={'center'} gap={'lg'} px={'hugo'}>
                <LinkButton href={"https://github.com"}>
                    <Box bg={'blue'} width={'100%'} flexDirection={'row'} borderRadius={99} py={'md'} gap={'md'}
                         justifyContent={'center'}
                         alignItems={'center'}>
                        <FeatherIcon name={'github'} size={16} color={'white'}/>
                        <Text color={'white'} fontSize={16}>@AuroraOps04</Text>
                    </Box>
                </LinkButton>
                <LinkButton href={"https://www.youtube.com/watch?v=k2h7usLLBhY"}>
                    <Box bg={'red'} borderRadius={99} py={'md'} width={'100%'} flexDirection={'row'} gap={'md'}
                         justifyContent={'center'}
                         alignItems={'center'}>
                        <FeatherIcon name={'youtube'} size={16} color={'white'}/>
                        <Text color="white" fontSize={16}>Go to YouTube channel</Text>
                    </Box>
                </LinkButton>
                <LinkButton
                    href={"https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbVJ1clFiMElwZG82amlYUXJnczNnbi03eDdfUXxBQ3Jtc0trVGRCb0ZjaWQ4OE44RUpYeElnQ3ZtLWMxbkNka1hSOWtaeVNKUjFPdVJKWkdkQVVwcHBqRmVfalZwc3d0N2hJVzJ3eU1WaUJVRGp4S1ltNFByNHlnZ0VJeC1Ga2pkRzRpUm8tXzViSlk3UEkwUGo0UQ&q=https%3A%2F%2Fwww.inkdrop.app%2F%3Futm_source%3Ddevaslife%26utm_medium%3Dyoutube%26utm_campaign%3Dvlog%26utm_content%3Dk2h7usLLBhY&v=k2h7usLLBhY"}>
                    <Box bg={'indigo'} borderRadius={99} py={'md'} width={'100%'} flexDirection={'row'}
                         justifyContent={'center'} gap={'md'}
                         alignItems={'center'}>
                        <FeatherIcon color={'white'} name={'share-2'} size={16}/>
                        <Text color={'white'} fontSize={16}>@inkdrop_app</Text>
                    </Box>
                </LinkButton>
            </Box>
        </Box>
    </Box>
}
export default About;