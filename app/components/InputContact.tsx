import React from "react";

type Props = {
    label: string;
    type: string;
    placeholder: string;
    id: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputContact({
    label,
    type,
    placeholder,
    id,
    value,
    onChange,
}: Props) {
    return (
        <div className="flex flex-col w-full">
            <label className="mb-2 font-bold">
                {label}
                <span className="text-red-400 font-normal">*</span>
            </label>
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                className="p-2 border-b-2 border-gray-300 focus:border-purple-600 focus:outline-none transition duration-200 "
                required
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default InputContact;
