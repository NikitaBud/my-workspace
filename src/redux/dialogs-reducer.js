const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Maria', img: '/princess-leia.png'},
        {id: 2, name: 'Roman', img: '/alien-2.png'},
        {id: 3, name: 'Danila', img: '/alien-4.png'},
        {id: 4, name: 'Paul', img: '/astronaut.png'},
        {id: 5, name: 'Ivan', img: '/rick.png'},
        {id: 6, name: 'Jura', img: '/darth-vader.png'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your?'},
        {id: 3, message: 'Yo-yo'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText;
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: 4, message: body}
                    ]
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageText) => {
    return {
        type: SEND_MESSAGE,
        newMessageText
    }
}

export default dialogsReducer;
