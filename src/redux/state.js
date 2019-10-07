let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are your?', likesCount: 11},
                {id: 3, message: 'Yo-yo', likesCount: 22}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Maria', img: '/princess-leia.png'},
                {id: 2, name: 'Roman', img: '/alien-2.png'},
                {id: 3, name: 'Danila', img: '/alien-4.png'},
                {id: 4, name: 'Paul', img: '/atronaut.png'},
                {id: 5, name: 'Ivan', img: '/rick.png'},
                {id: 6, name: 'Jura', img: '/darth-vader.png'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are your?'},
                {id: 3, message: 'Yo-yo'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;
export default store;