import { GET_CONTACTS, CREATE_CONTACT, GET_CONTACTS_SUCCESS, GET_CONTACTS_ERROR, ContactAction, CreateContactPayload, Contact } from './types'

export function getContacts(): ContactAction {
    return {
        type: GET_CONTACTS,
    }
}

export function getContactsSuccess(contactList: Contact[]) {
    return {
        type: GET_CONTACTS_SUCCESS,
        payload: contactList
    }
}

export function createContact(newContact: CreateContactPayload): ContactAction {
    return {
        type: CREATE_CONTACT,
        payload: newContact
    }
}