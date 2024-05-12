/* eslint-disable no-unused-vars */
import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'


const useStore = create(
    persist(
        (set, get) => ({
            list: [],
            tags: [
                { id: 0, name: 'Urgent' }
            ]
        }), {
            name: 'react-todoList-storage',
            storage: createJSONStorage(() => localStorage)
        }

    )
)

export {
    useStore
}


// (set) => ({

// })