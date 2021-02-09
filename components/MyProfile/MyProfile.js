import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

import myProfileImage from '../../assets/pennywise.jpg'
import MyPostsContainer from '../MyPosts/MyPosts'

const MyProfile = () => {
    const profileCard = (
        <View style={styles.cardContainer}>
            <View><Image source={myProfileImage} style={styles.avatarImage}/></View>
            <View style={{alignItems : 'center', flex : 2, paddingTop : 10}}>
                <Text style={styles.profileText}>
                     Pennywise {'\n'} 
                     'Dancing Clown' {'\n'}  
                </Text>
                <Text>Back in Derry!</Text>
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            {profileCard}
            <MyPostsContainer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white'
    },
    avatarImage : {
        height : 150,
        width : 150,
        borderRadius : 150
    },
    cardContainer : {
        marginTop : 20,
        marginLeft : 10,
        flexDirection : 'row'
    },
    profileText : {
        fontStyle : 'italic',
        fontSize : 20,
        textAlign : 'center'
    }
})

export default MyProfile