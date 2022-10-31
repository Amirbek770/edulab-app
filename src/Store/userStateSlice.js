import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from 'Api';

export const fetchAuth = createAsyncThunk('auth/fetchUserData', async (params) => {
  const data = await instance.post('/user/login', params)
  return data
})

export const fetchRegister = createAsyncThunk('auth/fetchUserRegister', async (params) => {
  const { data } = await instance.post('/user/register', params)
  return data
})

export const fetchUser = createAsyncThunk('auth/fetchUserMe', async () => {
  const { data } = await instance.get('/user/me')
  return data
})

export const slice = createSlice({
  name: 'userState',
  initialState: {
    token: '',
    netInfo: null,
    buyModal: null,
    getOnScroll: null,
    profile: {
      _id: null,
      full_name: '',
      phone: '',
    },
    lang: 'ru',
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      let rating = action.payload.data.rating;
      //  console.log('fetchAuth rating',rating);
      rating.forEach(element => {
        state.rating[element.lesson_id] = element.rating
      });
      state.status = 'loaded';
    },
    [fetchAuth.rejected]: (state) => {
      state.data = null;
      state.status = 'error';
    },
    [fetchUser.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.data = action.payload;

      let rating = action.payload.rating;

      rating.forEach(element => {
        state.rating[element.lesson_id] = element.rating
      });
      state.status = 'loaded';

    },
    [fetchUser.rejected]: (state) => {
      state.data = null;
      state.status = 'error';
    },
    [fetchRegister.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      let rating = action.payload.data.rating;

      rating.forEach(element => {
        state.rating[element.lesson_id] = element.rating
      });
      state.status = 'loaded';
    },
    [fetchRegister.rejected]: (state) => {
      state.data = null;
      state.status = 'error';
    },
  },
  reducers: {
    setBuyModal: (state, action) => {
      state.buyModal = action.payload;
    },
    login: (state, action) => {
      state.token = action.payload;
    },

    setNetInfo: (state, action) => {
      state.netInfo = action.payload;
    },
    logout: (state, action) => {
      state.token = '';
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    setUser: (state, action) => {
      state.profile = action.payload;
    }
  },
});

export const {
  setUser,
  setBuyModal,
  login,
  logout,
  setLang,
  setNetInfo,
} = slice.actions;

export const selectBuyModal = state => state.userState.buyModal;
export const selectToken = state => state.userState.token;
export const selectChildAge = state => state.userState.child_ages;
export const selectRooms = state => state.userState.select_rooms;
export const selectNetInfo = state => state.userState.netInfo;
export const selectLang = state => state.userState.lang;
export const selectStorage = state => state.userState.staticStorage;
export const selectHomeStorage = state => state.userState.homeStorage;
export const selectProfile = state => state.userState.profile;

export default slice.reducer;
