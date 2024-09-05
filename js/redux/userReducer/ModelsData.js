import { createSlice } from "@reduxjs/toolkit";
import { ModelsJson } from "../../constants/ModelJson";

const modelsData = createSlice({
    name:"modelsDataReducer",
    initialState:{
        modelsData: ModelsJson,
        wishlist: [],
        recentSearch:[]
    }, 
    reducers: {
        setModelsData(state, action){
            state.modelsData = action.payload;
        },
        toggleFavorite(state,action){
            const {Product_Id} = action.payload;

            const filterProduct = state.modelsData.findIndex((value) => value.Product_Id === Product_Id); 

            if(filterProduct !==-1){
                const collectionModel = state.modelsData[filterProduct];
                collectionModel.favorite = !collectionModel.favorite;

                if(collectionModel.favorite){
                    if(!state.wishlist){
                        state.wishlist = [];
                    }
                    state.wishlist.push(collectionModel)
                }else{
                    state.wishlist = state.wishlist.filter((item) => item.Product_Id !==Product_Id)
                }
            }

        },

        setRecentSearch(state, action) {
            state.recentSearch = action.payload
        },
    },
})

export const {setModelsData,toggleFavorite,setRecentSearch} = modelsData.actions;
export const modelsDataReducer = modelsData.reducer;