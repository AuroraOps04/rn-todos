import {PropsWithChildren} from "react";
import {Box,  Text} from "@/components/atom";
import {Image} from "react-native";

type MastheadProps = {
    source: number | undefined
    title: string
} & PropsWithChildren
const Masthead = ({children, source, title}: MastheadProps) => {
    return (
        <Box height={300} style={{width: '100%', boxSizing: 'border-box', position: 'relative', }}   justifyContent='space-between'
             py={'hugo'} position='relative'>
            <Image style={{width: '100%', height: 300, position:'absolute', right: 0, left:0 }} resizeMode='cover'
                   source={source}/>
            <Box width={'100%'} flex={1} px={'lg'}>
                <Box flex={1}>
                    {children}
                </Box>
                <Text fontSize={32} color={'white'}>{title}</Text>
            </Box>
        </Box>
    )
}
export default Masthead