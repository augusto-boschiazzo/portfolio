import Image from "next/image";
import React from "react";

function ProfileImage() {
    return (
        <span className="relative flex fade-in">
            <Image
                src="/profile.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full z-1"
            />
            <span className="absolute inline-flex h-full w-full profile-ping rounded-full sm:bg-purple-400 opacity-45"></span>
        </span>
    );
}

export default ProfileImage;
