const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageText;
            stateCopy = {
                ...state,
                newMessageText: '',
                messages: [
                    ...state.messages,
                    {id: 4, message: body}
                    ]
            };
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy = {
                ...state,
                newMessageText: action.newMessage
            };
            return stateCopy;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    }
}

export default dialogsReducer;