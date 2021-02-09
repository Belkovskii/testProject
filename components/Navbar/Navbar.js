import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import {connect} from 'react-redux'

const Navbar = ({ navigate, currentRouteName, navigationItems }) => {

    const navigateTo = route => {
        navigate(route)
    }

    const navigationButtons = navigationItems.map(navItem => {
        const isActive = currentRouteName === navItem.routeName
        return (
            <TouchableOpacity onPress={()=>navigateTo(navItem.routeName)} key={navItem.id}>
                <View style={isActive ? styles.activaNavbarElement : styles.navbarElements}>
                    <Text style={isActive ? styles.activeText : styles.text}>{navItem.buttonLabelText}</Text>
                </View>
            </TouchableOpacity>
        )
    })

    return (
        <View style={styles.navbarContainer}>

            {navigationButtons}
            
            <TouchableOpacity onPress={()=>Alert.alert('You have successfully logged in')}>
                <View style={styles.navbarElements}>
                    <Text  style={styles.text}>Log In</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        navigate : ownProps.navigate,
        currentRouteName : ownProps.currentRouteName,
        navigationItems : state.navbarData.navigationItems
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)
export default NavbarContainer 

/**styles for navigation buttons */
const styles = StyleSheet.create({
    navbarContainer : {
        height : 120,
        backgroundColor : '#00BFFF',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'flex-end'
    },
    navbarElements : {
        backgroundColor : '#87CEFA',
        borderRadius : 20,
        borderColor : '#FFFFFF',
        borderWidth : 3,
        marginBottom : 3,
        marginHorizontal : 2,
        alignItems : 'center',
        paddingHorizontal : 5,
        height : 80,
        justifyContent : 'center',
        flex : 1,
        width : 85,
        maxHeight : 85
    },
    text : {
        color : '#2F4F4F',
        fontWeight : 'bold'
    },
    activaNavbarElement : {
        backgroundColor : '#87CEFA',
        borderRadius : 20,
        borderColor : '#2F4F4F',
        borderWidth : 3,
        marginBottom : 3,
        marginHorizontal : 2,
        alignItems : 'center',
        paddingHorizontal : 7,
        height : 80,
        justifyContent : 'center',
        flex : 1,
        width : 85,
        maxHeight : 85
    },
    activeText : {
        color : '#778899'
    }
})