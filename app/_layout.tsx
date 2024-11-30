import {ThemeProvider} from "@shopify/restyle";
import {themeModeContext, theme, darkTheme} from "@/theme/theme";
import {useState} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";
import DrawerContent from "@/components/drawer-content";

export default function RootLayout() {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    return (
        <themeModeContext.Provider value={{mode, setMode}}>
            <ThemeProvider theme={mode === 'light' ? theme : darkTheme}>
                <GestureHandlerRootView style={{flex: 1}}>
                    <Drawer drawerContent={DrawerContent}>
                        <Drawer.Screen name="index" options={{headerShown: false}} />
                        <Drawer.Screen name="about" options={{headerShown: false}} />
                    </Drawer>
                </GestureHandlerRootView>
            </ThemeProvider>
        </themeModeContext.Provider>
    )
}
