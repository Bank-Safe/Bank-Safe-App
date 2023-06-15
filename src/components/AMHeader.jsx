import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AMHeader({setAddMoneyActive}) {
    return (

            <HeaderRNE backgroundColor="transparent"  
                leftComponent={<TouchableOpacity onPress={()=>setAddMoneyActive(false)}><Image style={styles.logo} source={require('../assets/images/back_arrow.png')} /></TouchableOpacity>}
                leftContainerStyle={{
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft:10,
                    paddingVertical:20
                }}
                centerContainerStyle={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingVertical:20

                }}
                centerComponent={{ text: 'Euro Account', style: styles.heading }}
            />

    );
}

const styles = StyleSheet.create({
    
    logo: {
        height: 18,
        width: 18,

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

