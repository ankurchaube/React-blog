import { useState } from "react"
export function useFormInput (initaialValue) {
    const [value,setValue ] = useState(initaialValue);

    function handleChange (e) {
        setValue(e.target.value)
    }

    return {

        value,
        onChange: handleChange
    }
}