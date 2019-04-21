function reducer (state , action){

    switch(action.type){
        case 'ADD_NEWS':
        return {...state, articles: action.payload, loaded: action.loaded};

        case 'LOAD_NEWS':
        return {...state, articles: action.payload}

        case 'LIKE_NEWS':
           const likeElem = state.articles.map((item) => {
               if(item._id === action.id){
                   item.likes = action.likes
                   item.userIpLikes = action.ip
               }
               return item
           });
        return {...state, articles: likeElem}; 

        case 'VIEW_NEWS':
        const viewElem = state.articles.map((item) => {
            if(item._id === action.id){
                item.views = action.views
                item.userIpViews = action.ip
            }
            return item
        });
     return {...state, articles: viewElem};

        case 'SEARCH_NEWS':
        return{...state, search: action.payload};

        case 'ITEMS_LOADED':
        return {...state, loaded:true}

        case 'ADD_VISITOR':
        return {...state, visitors: action.payload} 

        default:
        return state;
    };
};

export default reducer;