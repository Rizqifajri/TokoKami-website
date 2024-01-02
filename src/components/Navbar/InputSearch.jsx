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
        className="w-full sm:w-96 p-2 rounded-xl placeholder-italic"
        ref={searchRef}
        onKeyDown={handleKeyPress}
      />
      <button className="absolute top-2 end-1" onClick={handleButtonClick}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
