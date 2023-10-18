import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

const api = "https://expense-tracker-25d4f-default-rtdb.asia-southeast1.firebasedatabase.app/";


const initialState = {
    isLoading:false,
    menu: [],
    searchInput: "",
    cart: [],
    trackData:0
    
}


export const getMenu = createAsyncThunk(
    "menu/getMenu",
        () => {
        return fetch(`${api}/restdata/menu.json`).then(data=>data.json()).catch(e=>console.log(e))
    }
)

export const updateCart = createAsyncThunk(
    "menu/updateCartMenu",
    (payload) => {
        return fetch(`${api}/restdata/menu/${payload.id}.json`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({
                name:payload.item.name,
              price: payload.item.price,
              description:payload.item.description,
              units:payload.units<0?0:payload.units
              
            })
          }).then((res) => {
              if (res.ok) {
                return res.json();
            }else {
                return Promise.reject("Request failed with status: " + res.status);
              }
          }).catch(e => {
              console.log(e)
              return Promise.reject(e);
          });
    }
)
const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setSearchInput: (state, action) => {
            state.searchInput=action.payload
        }
       
    },
    extraReducers: {
        [getMenu.pending]: (state) => {
            state.isLoading=true
        },
        [getMenu.fulfilled]: (state, action) => {
            state.isLoading = false
            if (action.payload) {
                const a = Object.entries(action.payload);
                const allMenuData = a.map((e) => {
                    return { ...e[1], id: e[0] };
                });
                console.log('allmeuf',allMenuData)
                state.menu = allMenuData
            }
        },
        [getMenu.rejected]: (state) => {
            state.isLoading=false
        },
        
        [updateCart.pending]: (state) => {
        },
        [updateCart.fulfilled]: (state, action) => {
            console.log('update cart')
            state.trackData=state.trackData+1
        },
        [updateCart.rejected]: (state) => {
        },
        
    }

});

export const{setSearchInput}=menuSlice.actions

export default menuSlice.reducer






