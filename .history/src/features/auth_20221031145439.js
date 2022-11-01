import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: ""
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    serUser: (state, action) => {

    }
  }
})

export { setUser } = authSlice.actions;