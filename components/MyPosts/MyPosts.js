import React from 'react'
import { useState } from 'react'
import {View, Image, Text, StyleSheet, TextInput, Button, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import baloon from '../../assets/redBaloon.jpg'
import {addPostActionCreator} from '../../redux/reducers/myPostsReducer'

const MyPosts = ({postsItems, addNewPost}) => {

    const [inputValue, setInputValue] = useState('')

    const posts = postsItems.map(postItem => {
        return (
            <View style={styles.postsContainer}>
                <Image source={baloon} style={styles.baloon}></Image>
                <Text>{postItem.postText}</Text>
            </View>
        )
    })

    return (
        <View>
            <View style={styles.inputContainer}>
                 <TextInput 
                    style={styles.input}
                    onChangeText={setInputValue}
                    value={inputValue}
                 />
                 <Button 
                    title='Add post'
                    onPress={()=>{
                        addNewPost(inputValue)
                        setInputValue('')
                    }}
                 />
            </View>
           <ScrollView>
               {posts}
           </ScrollView>
            
        </View>
    )
}

const mapStateToProps = state => {
    return {
        postsItems : state.myPostsData.postsItems
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewPost : newPostValue => dispatch(addPostActionCreator(newPostValue))
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer

const styles = StyleSheet.create({
    baloon : {
        width : 50,
        height : 50,
        backgroundColor : 'white'
    },
    postsContainer : {
        flexDirection : 'row',
        paddingLeft : 20,
        marginTop : 30,
        borderStyle : 'solid',
        borderColor : '#3949ab',
        borderWidth : 1,
        borderRadius : 10,
        width : 300,
        marginLeft : 30
    },
    input : {
        width : '70%',
        borderBottomColor : '#3949ab',
        borderStyle : 'solid',
        borderBottomWidth : 2,
        marginHorizontal : 5
    },
    inputContainer : {
        flexDirection : 'row',
        marginTop : 10
    }
})
