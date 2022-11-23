import {create} from "zustand/react";
import {persist} from 'zustand/middleware'

const store = persist((set) => ({
    project: [],
    setProject: (project) => ((state) => state.project)
}))

export const useProjectStore = create(store);