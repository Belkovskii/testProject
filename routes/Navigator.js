import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MyProfile from '../components/MyProfile/MyProfile'
import Messages from '../components/Messages/Messages'
import ProfilesContainer from '../components/Profiles/Profiles'
import NavbarContainer from '../components/Navbar/Navbar'

const StackNavigator = createStackNavigator()
 
const MyStack = () => {
    return (
        <StackNavigator.Navigator screenOptions={{
            animationEnabled : false,
            header : ({navigation, scene}) => <NavbarContainer navigate={navigation.navigate} currentRouteName={scene.route.name}/>
        }}>
            <StackNavigator.Screen name='MyProfile' component={MyProfile}/>
            <StackNavigator.Screen name='Profiles' component={ProfilesContainer}/>
            <StackNavigator.Screen name='Messages' component={Messages}/>
        </StackNavigator.Navigator>
    )
}

export default MyStack