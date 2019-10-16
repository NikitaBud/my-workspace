import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are your?', likesCount: 11},
                {id: 3, message: 'Yo-yo', likesCount: 22}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;