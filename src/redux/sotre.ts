import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import { AuthSliceReducer, FilterSliceReducer/* , UserSliceReducer */ } from "./features";

const store = configureStore({
    devTools:true,
    reducer: {
        auth: AuthSliceReducer,
        filters: FilterSliceReducer,
        //user: UserSliceReducer,
        /* [orderApi.reducerPath]: orderApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
        [totalsCounterApi.reducerPath]: totalsCounterApi.reducer */
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        /* .concat(authApi.middleware)
        .concat(totalsCounterApi.middleware)
        .concat(orderApi.middleware), */
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);

export { store };