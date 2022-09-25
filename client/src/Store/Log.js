import { createSlice } from "@reduxjs/toolkit";

const sessionIsLoggedIn = sessionStorage.getItem("isLoggedIn") || true;
const sessionLogin = sessionStorage.getItem("login") || "gonwo";

const initialLogState = { isLoggedIn: sessionIsLoggedIn, login: sessionLogin };

const logSlice = createSlice({
    name: "log",
    initialState: initialLogState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            sessionStorage.setItem("isLoggedIn", "true")
            state.login = action.payload;
            sessionStorage.setItem("login", `${action.payload}`);
        },
        logout(state) {
            state.isLoggedIn = false;
            sessionStorage.removeItem("isLoggedIn");
            state.login = undefined;
            sessionStorage.removeItem("login");
        },
    },
});

export const logActions = logSlice.actions;

export default logSlice.reducer;