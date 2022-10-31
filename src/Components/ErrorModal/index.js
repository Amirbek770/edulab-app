import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextComponent, ButtonComponent, VectorIconComponent, AlertComponent } from 'Components'

const ErrorModal = ({ visible }) => {
    return (
        <AlertComponent visible={visible}>
            <View style={styles.container}>
                <TextComponent>
                    Hello it is radio text
                </TextComponent>
            </View>
        </AlertComponent>
    )
}

export default ErrorModal

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: ''
    }
})