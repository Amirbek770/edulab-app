import React from 'react'
import { TouchableOpacity } from 'react-native'

const ButtonComponent = ({ children, onPress, style, ...rest }) => {
    return (
        <TouchableOpacity
            style={style}
            onPress={onPress}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
}

export default ButtonComponent