import { GET_CARDS, CREATE_CARD, CardActions, CreateCardPayload } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function getCards(): CardActions {
    return {
        type: GET_CARDS,
    }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function createCard(newCard: CreateCardPayload): CardActions {
    return {
        type: CREATE_CARD,
        payload: newCard
    }
}