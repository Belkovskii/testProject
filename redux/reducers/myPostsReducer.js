const ADD_POST = 'ADD_POST'

const initialState = {
    postsItems : [
        {
            id : 1,
            postText : 'They float!!! They all float!!!'
        },
        {
            id : 2,
            postText : 'I love Derry...'
        },
        {
            id : 3,
            postText : 'Welcome to Loosers club!'
        }
    ]
}

const myPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            return {
                postsItems : [
                    {
                        id : state.postsItems.length+1,
                        postText : action.payload
                    },
                    ...state.postsItems
                ]
            }
        }
        default : {
            return {...state}
        }
    }
}
export default myPostsReducer
export const addPostActionCreator = newPostValue => ({type : ADD_POST, payload : newPostValue})