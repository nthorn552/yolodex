export const GET_CONTACTS = "GET_CONTACTS";
export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS";
export const GET_CONTACTS_ERROR = "GET_CONTACTS_ERROR";
export const CREATE_CONTACT = "CREATE_CONTACT";

export interface Contact {
    id: string,
    name: string
}

export interface CreateContactPayload {
    id: never,
    name: string
}

type GetContactsAction = {
    type: typeof GET_CONTACTS
}

type GetContactsSuccessAction = {
    type: typeof GET_CONTACTS_SUCCESS,
    payload: [Contact]
}

type CreateContactAction = {
    type: typeof CREATE_CONTACT,
    payload: CreateContactPayload
}

export type ContactAction = GetContactsAction | GetContactsSuccessAction | CreateContactAction;