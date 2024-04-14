/* eslint-disable no-unused-vars */
import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'


const useStore = create(
    persist(
        (set, get) => ({
            list: [],
            setItemList: (newItem) => set((state) => ({ list: [...state.list, newItem] })),
            checkItemList: (index) => set((state) => {
                const updateList = [...state.list]
        
                updateList[index].isDone = !updateList[index].isDone
        
                return { list: updateList }
            })
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