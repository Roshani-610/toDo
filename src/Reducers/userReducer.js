const initialData = {
    lastUserId: 1,
    userList: [
        {
            id: 0,
            email: 'as@gmail.com',
            fname: 'Ash',
            lastName: 'Desai',
            address: 'Bengaluru, Karnataka',
            zipcode: '560037',
            phoneNumber: '9012121212',
        },
    ]
}

const UserReducer = (state = initialData, action) => {
    switch (action.type) {
        
        case 'ADD_USER':
            const { data } = action.payload || {};
            const newUser = {
                id: state.lastUserId,
                ...data
            };
            return {
                ...state,
                lastUserId: state.lastUserId + 1,
                userList: [
                    ...state.userList,
                    newUser
                ]
            };


        case 'DELETE_USER':
            const deleteUser = state.userList.filter(user => user.id !== action.payload.id && user);
            console.log("removed list" + deleteUser)
            return {
                ...state,
                userList: deleteUser
            };

        case 'GET_USER_DETAILS':
            const userId = action.payload.userId;
            const userToEdit = state.userList.find((user) => user.id === parseInt(userId));
            return {
                ...state,
                user: userToEdit,
            };
        case 'UPDATE_USER':
            const updatedUser = action.payload.userData;
            const updatedUserList = state.userList.map((user) => user.id === updatedUser.id ? { ...user, ...updatedUser } : user);
            return {
                ...state,
                userList: updatedUserList,
            };

        default:
            return state;
    }
}


export default UserReducer
