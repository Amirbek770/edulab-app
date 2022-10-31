import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Animated, Modal, } from 'react-native'
import { useTheme } from 'styled-components/native'

const ModalPoup = ({ visible, children,  modalCoontainerStyle}) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;
    const theme = useTheme()

    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    useEffect(() => {
        toggleModal()
    }, [visible]);

    return (
        <Modal transparent visible={visible}>
            <View style={[styles.modalBackGround, { backgroundColor: theme.colors.modalBackground }]}>
                <Animated.View
                    style={[modalCoontainerStyle, { transform: [{ scale: scaleValue }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    )

}

export default ModalPoup

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})