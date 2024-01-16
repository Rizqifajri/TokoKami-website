// InputSearch.jsx
import React, { useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const InputSearch = ({ }) => {
  const searchRef = useRef();
  const router = useRouter();

  const handleButtonClick = () => {
    const keyword = searchRef.current.value.trim();
    router.push(`/search/${keyword}`);
    
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div className="relative mt-2">
      <input
        placeholder="Search Product..."
        className="w-32 text-sm h-6 placeholder:text-xs lg:h-10 lg:w-full truncate p-2 rounded-xl placeholder-italic"
        ref={searchRef}
        onKeyDown={handleKeyPress}
      />
      <button className="absolute  end-1 w-5 lg:scale-100 lg:top-2 lg:right-3 hover:scale-75 lg:hover:scale-110 scale-50" onClick={handleButtonClick}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
