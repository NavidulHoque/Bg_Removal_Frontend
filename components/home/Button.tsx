"use client"

import Upload from "@/icons/Upload"

export default function Button() {
    return (
        <>
            <input 
                type="file" 
                accept="image/*" 
                hidden 
            />
            
            <button
                className="bg-gradient-violet-fuchsia text-20-normal-white flex-center gap-x-2 w-[266px] h-[67px] rounded-full hover-scale"
            >
                <Upload />Upload your image
            </button>
        </>
    )
}
