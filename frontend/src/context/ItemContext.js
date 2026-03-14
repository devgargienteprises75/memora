'use client'
import { createContext, useState } from "react";

export const ItemContext = createContext()

const ItemProvider = ({ children }) => {

    const [items, setItems] = useState(null)
    const [loading, setLoading] = useState(false)

    return(
        <ItemContext.Provider value={{ items, loading, setItems, setLoading }}>
            { children }
        </ItemContext.Provider>
    )
}

export default ItemProvider