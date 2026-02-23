import React from "react";
import {Tabs} from  "expo-router";
import {ImageBackground} from "expo-image";
import {images} from "@/constants/images";
import {Image} from "expo-image";
import {Text} from "react-native";
import {icons} from "@/constants/icons";


const _Layout = () => {
    // @ts-ignore
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                    <>
                    <ImageBackground
                    source={images.highlight}
                    className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
                    >
                     <Image source={icons.home} tintColor="#151312" className="size-5" />
                     <Text>Home</Text>
                    </ImageBackground>
                    </>
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false
                }}
            />
        </Tabs>
    )
}

export default _Layout;