import {createBox, createRestyleComponent, createText} from "@shopify/restyle";
import {Theme, themeModeContext} from "@/theme/theme";
import {Switch} from "react-native"
import {ComponentProps, useCallback, useContext} from "react";

const Box = createBox<Theme>()
const Text = createText()
const ThemeToggle = () => {
    const {mode, setMode} = useContext(themeModeContext)
    const onToggle = useCallback((e: boolean) => {
        setMode(e ? 'dark' : 'light')
    }, [setMode])
    return <Box flexDirection={'row'} gap={'sm'} justifyContent={'center'} alignItems={'center'}>
        <Text>
            Light
        </Text>
        <Switch value={mode === 'dark'} onValueChange={onToggle}/>
        <Text>
            Dark
        </Text>
    </Box>
}

export default ThemeToggle