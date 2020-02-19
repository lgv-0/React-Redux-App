const initialState =
    {
        cards:[],
        lastError:""
    };

export const ghReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case "ADD_USER":
            {
                return (
                    {
                        ...state,
                        cards:
                            [
                                ...state.cards,
                                action.personData
                            ],
                        lastError:""
                    }
                );
            }
        case "API_ERROR":
            {
                return (
                    {
                        ...state,
                        lastError:action.info
                    }
                )
            }
        default:
            return state;
    }
};