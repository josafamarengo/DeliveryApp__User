import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 3/2,
    },
    iconContainer: {
        position: 'absolute',
        top: 30,
        left: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        margin: 10,
    },
    deliveryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    rating: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 10,
    },
    menuTitle: {
        fontSize: 18,
        letterSpacing: 0.7,
        fontWeight: '600',
        marginTop: 20,
        marginLeft: 10,
    },
});