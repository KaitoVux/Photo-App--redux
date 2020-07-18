import React from "react";
import "./Banner.scss"

interface IBannerProps {
    title: string;
    background: string;
}

export default function Banner(props: IBannerProps) {
    const { title, background } = props;
    const bannerStyle = background ? { backgroundImage: `url(${background})` } : {};
    return (
        <section className="banner" style={bannerStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    )
}
