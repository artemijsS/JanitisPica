import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingDrinkBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 357"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <circle cx="132" cy="120" r="115" />
            <rect x="0" y="315" rx="6" ry="6" width="91" height="31" />
            <rect x="137" y="307" rx="25" ry="25" width="140" height="46" />
        </ContentLoader>
    );
}

export default LoadingDrinkBlock;