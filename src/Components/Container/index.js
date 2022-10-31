import React from 'react'
import { StatusBar, View } from 'react-native'

const Container = ({ children, statusBarProps, containerStyles }) => {
    return (
        <View style={[{ flex: 1 }, containerStyles]}>
            <StatusBar translucent backgroundColor="transparent" {...statusBarProps} />
            {children}
        </View>
    )
}

export default Container