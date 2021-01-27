import React from "react"
import ContentLoader from "react-content-loader"

const LoadingMap = () => (
    <ContentLoader
        speed={2}
        width={1260}
        height={400}
        viewBox="0 0 1260 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="10" ry="10" width="1260" height="400" />
    </ContentLoader>
)

export default LoadingMap;
