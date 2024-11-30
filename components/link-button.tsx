import {Pressable, Linking} from "react-native";
import {ReactNode, useCallback} from "react";

type LinkButtonProps = {
    href: string;
    children: ReactNode;
}

const LinkButton = ({href, children}: LinkButtonProps) => {
    const onPress = useCallback(() => {
        Linking.openURL(href)
    }, [href])
    return (
        <Pressable style={{width: '100%'}} onPress={onPress}>
            {children}
        </Pressable>
    )
}

export default LinkButton