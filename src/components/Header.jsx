import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';

export default function Header() {
    return (

            <HeaderRNE backgroundColor="transparent"  
                leftComponent={<Image style={styles.logo} source={require('../assets/images/userDP.png')} />}
                rightComponent={{}}
                leftContainerStyle={{
                    justifyContent: "center",
                    alignItems: "flex-start"
                }}
                centerContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
                centerComponent={{ text: 'Home', style: styles.heading }}
            />

    );
}

const styles = StyleSheet.create({
    
    logo: {
        height: 40,
        width: 40,

    },
    heading: {
        color: '#000000',
        fontFamily: 'Inter-Medium',
        fontSize: 17, 

    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

