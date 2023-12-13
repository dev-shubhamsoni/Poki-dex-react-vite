import { useState } from "react";
import { Input } from "../ui/input";

const SearchInput = ({search}) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <>
            <Input onChange = {search} placeholder='Search Pokemon'
                className={`border-2 ${isFocused ? 'border-blue-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:border-blue-500 transition duration-300 w-[58rem] ml-20 py-10 rounded-r-3xl text-xl font-mono`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            
        </>
    )
};

export default SearchInput