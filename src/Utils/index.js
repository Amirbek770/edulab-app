import AsyncStorage from "@react-native-async-storage/async-storage"

export const createAllValue = async ({ valueName, value }) => {
    try {
        // const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(`${valueName}`, value)
    } catch (err) {
        console.log(err);
    }
}

export const getValue = async ({ valueName }) => {
    try {
        const value = await AsyncStorage.getItem(valueName)
        if (value !== null) {
            return value
        }
    } catch (err) {
        console.log(err);
    }
}

export const removeValue = async ({ valueName }) => {
    try {
        await AsyncStorage.removeItem(`${valueName}`)
    } catch (err) {
        console.log(err);
    }

}