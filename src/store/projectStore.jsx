import create from "zustand";
import {persist} from 'zustand/middleware'

const store = persist((set) => ({
    project: [{}],
    setProject: (projects) => set((state) => ({project: projects}))
}),{name:'project_store'})

export const useProjectStore = create(store);