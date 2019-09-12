import {
    Contact,
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    ContactAction
} from './types'

export type ContactState = {
    loading: boolean,
    dictionary: Map<string, Contact>
}

const initialState: ContactState = {
    loading: false,
    dictionary: new Map<string, Contact>()
};

const reducer = function contacts(
    state = initialState,
    action: ContactAction
): ContactState {
    console.log(action);
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                loading: true
            }
        case GET_CONTACTS_SUCCESS:
            const dictionary = new Map<string, Contact>();
            action.payload.forEach((contact) => {
                dictionary.set(contact.id, contact);
            })
            return {
                ...state,
                loading: false,
                dictionary
            }
        default:
            return state;
    }
}

export default reducer;