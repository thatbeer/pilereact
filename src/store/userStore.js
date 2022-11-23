import {create} from "zustand/react";
import {persist} from 'zustand/middleware'

const userStore = persist((set) => ({
    user: null,
    setCurrentUser: (user) => set(() => ({ user: user })),
    removeCurrentUser: (user) => set(() => ({ user: null })),
}))

export const useUserStore = create(userStore);


const tokenStore = persist((set) => ({
    token: null,
    setToken: (token) => set(() => ({ token: token })),
    removeToken: (token) => set(() => ({ token: null })),
}))

export const useTokenStore = create(tokenStore);

const useStore = create(set => ({
    fishies: {},
    fetch: async pond => {
      const response = await fetch(pond)
      set({ fishies: await response.json() })
    }
}));