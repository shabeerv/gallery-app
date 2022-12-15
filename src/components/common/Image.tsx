import React from "react";
import Overlay from "../Overlay";
//import './style.css'

type Photo = {
    id: number
    urls: { large: string; regular: string; full: string; small: string }
    likes: number
    user: { username: string }
}

export const Image: React.FC<{ photo: Photo }> = ({ photo }) => {
    const { user, urls, likes } = photo

    return (
        <>
            <img 
                src={urls.small}
                alt=""
                loading="lazy"
                className="image-item img"
            />
            <Overlay
                likes={likes}
                username={user.username}
            />
        </>
    )
} 