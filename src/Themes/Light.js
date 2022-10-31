import { DefaultTheme } from '@react-navigation/native';
const Light = {
    dark: false,
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#FFFFFF',
        backgroundCard: '#FFEC01',
        white: '#ffffff',
        black: '#000000',
        primary: '#FFAC30',
        secondary: '#F1F3F6',
        grey: '#eeeeee',
        lightGrey: '#f5f5f5',
        success: '#38C2B7',
        error: '#E14161',
        text1: '#1B1D28',
        text2: '#3A4276',
        text3: '#7B7F9E',
        boxBackground: '#F1F3F6',
        modalBackground: 'rgba(0,0,0,0.2)',
        activeIconColor: '#000000',
        defaultIconColor: '#E8DDEA',
        bottomNavigation: '#186888'
    },
};

export default Light;
