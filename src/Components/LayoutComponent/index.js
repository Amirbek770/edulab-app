import React, { useCallback, useState } from 'react'
import { ScrollView, SafeAreaView, RefreshControl, View } from 'react-native'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Layout = ({ children, styles }) => {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        wait(2000).then(() => {
            setRefreshing(false)
        })
    }, [])

    return (
        <SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Layout