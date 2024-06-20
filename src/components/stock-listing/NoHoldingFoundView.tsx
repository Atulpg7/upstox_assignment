import { StyleSheet, Text, View } from "react-native"
import { theme } from "../../styles/global";

const NoHoldinFoundView = () => {
    const { colors, textVariants, spacing } = theme;
    return (<View style={style.container}>
        <Text style={[textVariants.title, {textAlign:'center'}]}>No holdings found! You can explore more stocks...</Text>
    </View>)
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.l,
    },
})

export default NoHoldinFoundView;