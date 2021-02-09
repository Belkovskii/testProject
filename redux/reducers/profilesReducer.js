import axios from 'axios'

const LOAD_PROFILES = 'LOAD_PROFILES'
const IS_FETCHING = 'IS_FETCHING'
const IS_NOT_FETCHING = 'IS_NOT_FETCHING'

const initialState = {
    items: [{
        userId: '1',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: 'Test Name',
        contacts: {
            github: 'github URL',
            vk: 'vk URL'
        },
        photos: {
            small: 'https://bipbap.ru/wp-content/uploads/2019/05/s1200-1-14.jpg',
            large: 'https://bipbap.ru/wp-content/uploads/2019/05/7c353e5877eedea5b457f0f18340bcbb-weird-drawings-creepy-art.jpg'
        }
    }
    ],
    currentPage : 1,
    totalCount : 1,
    pageSize : 5,
    isFetching : true

}

const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PROFILES: {
            console.log('old state is: ' , state)
            return {...state, items : [...action.payload.items], totalCount : action.payload.totalCount }
        }
        case IS_FETCHING: {
            return {...state, isFetching : true}
        }
        case IS_NOT_FETCHING : {
            return {...state, isFetching : false}
        }
        default :
           return {...state}
    }
}
export default profilesReducer

export const loadProfilesActionCreator = (currentPage = 1) => {
    return async dispatch => {
        dispatch({type : IS_FETCHING})
        const response =  await axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=5`
        )
        console.log('response was: ', response.data)
        dispatch({ type: LOAD_PROFILES, payload: { items: response.data.items, totalCount: response.data.totalCount } })
        setTimeout(() => {
            dispatch({type: IS_NOT_FETCHING})
        }, 20000);
    }
}
