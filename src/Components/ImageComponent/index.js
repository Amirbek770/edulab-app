import React, { useState } from "react";
import { Image } from "react-native";
import { Images } from 'Constants'

const ImageComponent = ({ source, style }) => {
    const [showDefault, setShowDefault] = useState(true)

    var image = showDefault ? Images.defaultImg : source;
    return (
        <Image
            source={image}
            style={style}
            onLoadEnd={() => setShowDefault(false)}
            resizeMode='cover'
        />
    )
}

export default ImageComponent;
