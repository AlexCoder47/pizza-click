import React from "react";
import ContentLoader from "react-content-loader";

const SceletonPizza = (props) => (
    <ContentLoader
        className="card-pizza"
        speed={2}
        width={300}
        height={527}
        viewBox="0 0 300 527"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="151" cy="149" r="140" />
        <rect x="58" y="305" rx="10" ry="10" width="185" height="25" />
        <rect x="11" y="350" rx="12" ry="12" width="280" height="100" />
        <rect x="16" y="470" rx="9" ry="9" width="50" height="27" />
        <rect x="140" y="458" rx="30" ry="30" width="150" height="55" />
    </ContentLoader>
);

export default SceletonPizza;
