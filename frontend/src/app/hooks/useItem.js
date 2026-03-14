'use client'

import { ItemContext } from "@/context/ItemContext";
import { useContext } from "react";
import { saveItem } from "../services/items.api";

const useItem = () => {

    const { items, loading, setItems, setLoading } = useContext(ItemContext)

    const handleSaveItem = async (url, title) =>{
        setLoading(true)
        try {
            const res = await saveItem(url, title)
            setItems(res.items)
        } catch(err){
            throw err
        } finally {
            setLoading(false)
        }
    }

    return {
        items,
        loading,
        setItems,
        setLoading,
        handleSaveItem,
    }
}

export default useItem;