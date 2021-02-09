import React from 'react'
import { useEffect } from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import {connect} from 'react-redux'
import freddy from '../../assets/freddy.jpg'
import {loadProfilesActionCreator} from '../../redux/reducers/profilesReducer'

const Profiles = ({profilesItems, loadProfiles, isFetching}) => {
    console.log('!!@@##' , profilesItems)
    useEffect(()=> loadProfiles(), [])

    return (
        <View style={styles.container}>
            {isFetching ? 
                <Text> DOWNLOADING </Text> :
                profilesItems.map(profileItem => {
                    return (
                        <View style={styles.cardConteiner}>
                           <Image source = {profileItem.photos.small ? profileItem.photos.small : freddy} style={styles.avatar}/>
                           <Text>{profileItem.fullName}</Text>
                        </View>
                    )
                })}
        </View>
    )
}

const mapStateToProps = state => {
    return {
        profilesItems : state.profilesData.items,
        currentPage : state.profilesData.currentPage,
        isFetching : state.profilesData.isFetching
    }
}
const mapDispatchToProps = () => {
    return {
        loadProfiles : currentPage => {
            currentPage = currentPage ? currentPage : 1
            loadProfilesActionCreator(currentPage)
        }
    }
}
const ProfilesContainer  = connect(mapStateToProps, mapDispatchToProps)(Profiles) 
export default ProfilesContainer

const styles = StyleSheet.create({
    cardConteiner : {
        flexDirection : 'row'
    },
    avatar : {
        width : 70,
        height : 70,
        borderRadius : 70
    },
    container : {
        margin : 20,
        padding : 10,
        height : 100,
        width : 350
    }
})