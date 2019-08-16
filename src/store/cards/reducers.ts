import {
    Card,
    GET_CARDS_SUCCEEDED,
    CREATE_CARD,
    CardActions,
    CardState
} from './types'

const initialState: CardState = {
    dictionary: new Map<string, Card>()
};

const reducer = function cards(
    state = initialState,
    action: CardActions
): CardState {
    console.log(action);
    switch (action.type) {
        case GET_CARDS_SUCCEEDED:
            const cardsObj = {
                dictionary: new Map<string, Card>()
            }
            action.payload.forEach((card) => {
                debugger;
                cardsObj.dictionary.set(card.id, card);
            })
            // return { dictionary: cardsObj.dictionary };
            return {
                dictionary: { "test1": { id: "test", name: "test" } }
            }
        case CREATE_CARD:
            // call saga create card
            // TEMP
            // const newId = "id" + state.dictionary.size.toString;
            const newId = "test";
            const newCard: { [index: string]: Card } | Object = {
                newId:
                {
                    id: newId,
                    name: action.payload.name
                }
            }
            return {
                dictionary: { ...state.dictionary, ...newCard }
            }
        default:
            return state;
    }
}

export default reducer;