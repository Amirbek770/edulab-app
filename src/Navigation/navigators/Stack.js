import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth } from 'Screens'
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator()

const Stacks = () => {
    return (
        <Stack.Navigator initialRouteName="AuthNavigation">
            <Stack.Screen
                name="AuthNavigation"
                component={Auth}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="TabNavigation"
                component={TabNavigation}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )
}

export default Stacks