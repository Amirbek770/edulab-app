import React from 'react'
import {
    Home,
    Profile,
    Reating,
    Tutorial,
    Tests
} from 'Screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import { VectorIcon } from 'Components'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    const theme = useTheme()

    const data = [
        {
            component: Home,
            path: 'Home',
            iconName: 'home',
            iconType: 'AntDesign',
        },
        {
            component: Tests,
            path: 'Tests',
            iconName: 'ab-testing',
            iconType: 'MaterialCommunityIcons'
        },
        {
            component: Reating,
            path: 'Reating',
            iconName: 'linechart',
            iconType: 'AntDesign'
        },
        {
            component: Tutorial,
            path: 'Tutorial',
            iconName: 'profile',
            iconType: 'AntDesign'
        },
        {
            component: Profile,
            path: 'Profile',
            iconName: 'user',
            iconType: 'FontAwesome'
        },
    ]
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 18,
                    left: 70,
                    right: 70,
                    elevation: 0,
                    backgroundColor: theme.colors.bottomNavigation,
                    borderRadius: 15,
                    height: 55,
                    paddingTop: 8,
                    paddingHorizontal: 3
                }
            }}
        >
            {
                data.map((item, index) => (
                    <Tab.Screen
                        key={index}
                        name={item.path}
                        component={item.component}
                        options={{
                            tabBarIcon: (focused) => (
                                <VectorIcon
                                    name={item.iconName}
                                    type={item.iconType}
                                    size={30}
                                    color={focused.focused ? theme.colors.activeIconColor : theme.colors.defaultIconColor}
                                />
                            ),
                            title: ''
                        }}
                    />
                ))
            }
        </Tab.Navigator>
    )
}

export default TabNavigation