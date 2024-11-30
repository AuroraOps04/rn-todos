import {DrawerContentComponentProps} from "@react-navigation/drawer";
import {Box, FeatherIcon, Text} from "@/components/atom";
import ThemeToggle from "@/components/theme-toggle";
import {Image, Pressable, TouchableOpacity} from "react-native";
import {useCallback} from "react";

const DrawerContent = ({state, navigation}: DrawerContentComponentProps) => {
    const currentRoute = state.routeNames[state.index]
    const goMain = useCallback(() => {
        navigation.navigate('index')
    }, [navigation])
    const goBack = useCallback(() => {
        navigation.closeDrawer();
    }, [navigation])
    const goAbout = useCallback(() => {
        navigation.navigate("about")
    }, [navigation])
    return <Box flex={1} bg={'drawerBg'} justifyContent={'space-between'} px={'lg'} py={"hugo"}>
        <Box mt={'hugo'}>
            <Box alignItems='flex-end'>
                <TouchableOpacity onPress={goBack}>
                    <Box p={'sm'} borderWidth={1} borderColor={'boxStroke'} borderRadius={999}>
                        <FeatherIcon name={'chevron-left'} size={24} color={'boxStroke'}/>
                    </Box>
                </TouchableOpacity>
            </Box>
            <Box width={64} height={64} borderRadius={9999} borderColor={'profileBorder'} borderWidth={1}>
                <Image source={require("../assets/images/profile-image.png")}
                       style={{width: 64, height: 64, borderRadius: 100}}/>
            </Box>

            <Box my={'hugo'}>
                <Text fontSize={30} color={'text'}>
                    Takuya
                </Text>
                <Text fontSize={30} color={'text'}>
                    Matsuyama
                </Text>
            </Box>
            <Pressable onPress={goMain}>
                <Box mb={'md'} alignItems={'center'} borderRadius={5} px={'md'} flexDirection={'row'} gap={'lg'}
                     py={'md'} width={'100%'}
                     bg={currentRoute === 'index' ? 'blue' : 'drawerBg'}>
                    <FeatherIcon name={'box'} size={22} color={currentRoute === 'index' ? 'white' : 'drawerIcon'}/>
                    <Text fontSize={22} color={currentRoute === 'index' ? 'white' : 'drawerText'}>Tasks</Text>
                </Box>
            </Pressable>

            <Pressable onPress={goAbout}>
                <Box alignItems={'center'} borderRadius={5} px={'md'} flexDirection={'row'} gap={'lg'} py={'md'}
                     width={'100%'}
                     bg={currentRoute === 'about' ? 'blue' : 'drawerBg'}>
                    <FeatherIcon name={'box'} size={22} color={currentRoute === 'about' ? 'white' : 'drawerIcon'}/>
                    <Text fontSize={22} color={currentRoute === 'about' ? 'white' : 'drawerText'}>About</Text>
                </Box>
            </Pressable>
        </Box>
        <ThemeToggle/>
    </Box>
}

export default DrawerContent