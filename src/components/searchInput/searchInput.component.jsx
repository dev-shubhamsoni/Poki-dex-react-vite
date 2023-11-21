import { useState } from "react";

import { Input } from "../ui/input";
import { Search } from "lucide-react"
import { Button } from "../ui/button";


const SearchInput = () => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <>
            <Input placeholder='Search Pokemon'

                className={`border-2 ${isFocused ? 'border-blue-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:border-blue-500 transition duration-300 w-4/5 py-10 rounded-r-3xl text-xl font-mono`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <Button className='ml-2' variant="outline" size="icon">
                <Search color="#ff7300" className="h-4 w-4" />
            </Button>
        </>
    )
};

export default SearchInput