import create from 'zustand';
import {persist ,devtools} from 'zustand/middleware'

let apiStore = (set) => ({
    currentUser : null,
    data:null,
    status: null,
    token: localStorage.getItem("accessToken"),
    fetchUser : (credential) => {
        const response =  fetch('https://www.mecallapi.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)
        }).then((response) => set({ currentUser:  response}))
    },
    updateStatus: (status) => set((state) => ({status : state.currentUser.status})),
    setToken: () => set((state) => ({token : state.currentUser.token})),
    userLogout: () => set((state) => ({currentUser: null,status:null,token:null})),
    setData : () =>  set((state) => ({data : state.currentUser.json()})),
})

apiStore = devtools(apiStore)
apiStore = persist(apiStore, {name: 'meapi_setting',blacklist:['currentUser']})

export const useApiStore = create(apiStore);


const tokenStore = persist((set) => ({
    A_token: null,
    R_token:null,
    setAToken: (item) => set((state) => ({A_token : item })),
    setRToken: (item) => set((state) => ({R_token : item })),
    removeAToken : () => set((state) => ({A_token : null })),
}),{name:'token_store'})

export const useTokenStore = create(tokenStore)