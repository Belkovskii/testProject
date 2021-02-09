const initialState = {
    navigationItems : [
        {
            id : 1,
            routeName : 'MyProfile',
            buttonLabelText : 'My Profile'
        },
        {
            id : 2,
            routeName : 'Messages',
            buttonLabelText : 'Messages'
        },
        {
            id : 3,
            routeName : 'Profile',
            buttonLabelText : 'Profiles'
        }
    ]
}

const navbarReducer = (state = initialState, action) => {
    return state
}

export default navbarReducer;