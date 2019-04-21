const initialState = {articles: [
                        //     {
                        //     id: 2,
                        //     author: "Ann Schmidt",
                        //     title: "Stuffed sandwiches recalled over possible plastic contamination, officials announce - Fox News",
                        //     description: "Approximately 56,578 pounds of stuffed sandwiches have been recalled because they are reportedly contaminated by semi-transparent plastic, according to the Food Safety and Inspection Service (FSIS).",
                        //     content: "Approximately 56,578 pounds of stuffed sandwiches have been recalled because they are reportedly contaminated by semi-transparent plastic, according to the Food Safety and Inspection Service (FSIS). The recall was announced Friday, two days after the FSIS was… [+988 chars]",
                        //     urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2019/04/Bremmer-Pepperoni-Pizza.jpg",
                        //     views: 0,
                        //     likes: 0,
                        //     showOnce: false,
                        // }
                        ],
                    search: "",
                    loaded: true,
};

function reducer (state = initialState, action){

    switch(action.type){
        case 'ADD_NEWS':
        return {...state, articles: action.payload, loaded: action.loaded};

        case 'LIKE_NEWS':
            state.articles[action.payload].likes ++;
        return {...state, articles: state.articles};

        case 'VIEW_NEWS':
            state.articles[action.payload].views ++;
        return {...state, articles: state.articles};

        case 'SEARCH_NEWS':
        return{...state, search: action.payload};

        default:
        return state;
    };
};

export default reducer;