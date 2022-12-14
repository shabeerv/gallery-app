import React from "react";
import Overlay from "../Overlay";
//import './style.css'

type Photo = {
    id: number
    urls: { large: string; regular: string; full: string; small: string }
    likes: number
    user: { username: string }
}

const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

export const Image: React.FC<{ photo: Photo }> = ({ photo }) => {
    const { id, user, urls, likes } = photo

    return (
        <div 
            key={id} 
            className="image-item"
            onClick={() => openInNewTab(urls.full)}
        >
            <img 
                src={urls.small}
                alt=""
                loading="lazy"
            />
            <Overlay
                likes={likes}
                username={user.username}
            />
        </div>
    )
} 