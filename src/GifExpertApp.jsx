import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (newcategory) => {
        if(categories.includes(newcategory)) return
        setCategories([ newcategory, ...categories ])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={ onAddCategory }
            />

            {
                categories.map(( category ) => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    )
}