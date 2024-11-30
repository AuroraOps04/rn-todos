import {TouchableOpacity} from "react-native";
import {useNavigation} from "expo-router";
import {useCallback} from "react";
import {FeatherIcon} from "@/components/atom";

const NavBar = () => {
    const navigation = useNavigation()
    const openDrawer = useCallback(() => {
        // @ts-ignore
        navigation.openDrawer()
    }, [navigation])
    return (
        <TouchableOpacity onPress={openDrawer}>
            <FeatherIcon name={'menu'} color={'white'} size={24} />
        </TouchableOpacity>
    )
}
export default NavBar;