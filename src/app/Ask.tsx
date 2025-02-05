"use client";

import { PlaceholdersAndVanishInput } from "./components/ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
    const placeholders = [
        "What's the first rule of efficient coding?",
        "Who is Chamara Sapumal?",
        "Where is the next breakthrough hiding?",
        "Write a JavaScript method to transform ideas into reality.",
        "How to engineer your own automated system?",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
            <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
                Ask Chamara Sapumal Anything
            </h2>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}
