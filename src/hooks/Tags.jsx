import { useEffect, useState } from 'react'
import { useStore } from '../store/doList'

export const useTags = () => {
    const { tags } = useStore()
    const [tagList, setTagList] = useState([])

    useEffect(() => {
        setTagList(tags)
    }, [tags])

    return {tagList}
}