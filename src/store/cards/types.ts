export const GET_CARDS = "GET_CARDS";
export const GET_CARDS_SUCCEEDED = "GET_CARDS_SUCCEEDED";
export const CREATE_CARD = "CREATE_CARD";

export type CardState = {
    dictionary: {} //Map<string, Card>
}

export interface Card {
    id: string,
    name: string
}

export interface CreateCardPayload {
    id: never,
    name: string
}

type GetCardsAction = {
    type: typeof GET_CARDS
}

type GetCardsSucceededAction = {
    type: typeof GET_CARDS_SUCCEEDED,
    payload: [Card]
}

type CreateCardAction = {
    type: typeof CREATE_CARD,
    payload: CreateCardPayload
}

export type CardActions = GetCardsAction | GetCardsSucceededAction | CreateCardAction;