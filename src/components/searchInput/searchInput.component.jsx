import { useState } from "react";
import { Input } from "../ui/input";

const SearchInput = ({search}) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <>
            <Input onChange = {search} placeholder='Search Pokemon'
                className={`border-2 ${isFocused ? 'border-blue-500' : 'border-gray-300'} w-[75vw] ml-10 rounded-md p-2 focus:outline-none focus:border-blue-500 transition duration-300   py-10 rounded-r-3xl text-xl font-mono
                
                sm:w-[75vw] sm:ml-20
                lg:max-xl:ml-5 lg:w-[62vw]
                `}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            
        </>
    )
};

export default SearchInput