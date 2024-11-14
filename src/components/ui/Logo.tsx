import React from 'react';

export const Logo= () => {
    return (
        <div data-id="Logo">
            <div className="container">
                <div className="logoContainer">
                    {/* <img width="36" height="36"
                         src=""
                         alt="mweb-logopng"/> 
                    */}
                    <svg height="16" className="text" width="64" viewBox="0 0 64 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.7267 4.5206L25.3556 7.12434H26.8602C27.5768 7.12434 28.2391 6.54763 28.339 5.83674L28.516 4.59768C29.0528 5.84531 29.8265 6.79888 29.8265 6.79888C30.8029 6.41345 31.6594 6.12224 31.6594 6.12224C31.0113 5.56552 29.8322 4.27792 28.8529 2.85614H31.0284C31.2797 2.85614 31.4824 2.67914 31.5195 2.43646L31.6394 1.58853H28.9443L29.0556 0.803413H26.6831C26.4319 0.803413 26.2292 0.980423 26.1921 1.2231L26.1378 1.58853H23.6683C23.417 1.58853 23.2143 1.76554 23.1772 2.00822L23.0573 2.85614H25.13C24.6561 3.6955 23.3485 5.75109 22.5177 6.91022C22.5177 6.91022 24.3792 6.10797 25.7182 4.52345L25.7267 4.5206Z"
                            fill="white"></path>
                        <path d="M38.6312 2.85614H40.7753C41.0265 2.85614 41.2292 2.67914 41.2664 2.43646L41.3863 1.58853H38.7254L38.8368 0.803413H36.4643C36.2159 0.803413 36.0103 0.980423 35.9732 1.2231L35.9218 1.58853H33.4209C33.1696 1.58853 32.9669 1.76554 32.9298 2.00822L32.8099 2.85614H34.9197C34.4458 3.6955 33.1382 5.75109 32.3074 6.91022C32.3074 6.91022 34.1689 6.10797 35.5079 4.52345L35.1367 7.1272H36.6413C37.3579 7.1272 38.0202 6.55049 38.1202 5.8396L38.2972 4.60054C38.8339 5.84816 39.6076 6.80172 39.6076 6.80172C40.584 6.4163 41.4405 6.1251 41.4405 6.1251C40.7924 5.56837 39.6105 4.28078 38.6341 2.859L38.6312 2.85614Z"
                            fill="white"></path>
                        <path d="M30.109 8.15211H26.7801L23.6139 11.5724C25.5582 11.5724 27.3996 10.8272 28.7557 9.4911L28.85 9.39688H36.2272C35.8389 10.1677 34.7255 11.2098 33.0525 12.1719C30.7713 10.3248 28.6701 10.9957 28.6701 10.9957C28.6701 10.9957 29.6208 11.8864 30.7428 13.274C28.5702 14.1362 25.8665 14.7614 22.8088 14.7614L22.726 15.0098C22.726 15.0098 36.2044 16.6971 39.4248 9.39118L39.519 8.7174H29.5323L30.1119 8.14641L30.109 8.15211Z"
                            fill="white"></path>
                        <path d="M11.252 1.01752H3.24092C3.02394 1.01752 2.82694 1.18882 2.79839 1.40294L0.968352 14.2361L0.834167 15.1725L6.7297 14.0334L6.61265 14.8585H9.52473L10.0415 11.2355H8.42556C7.70896 11.2355 7.0466 11.8122 6.94668 12.5231L6.83534 13.2939L3.96323 13.6508L4.5485 9.54536H7.61189H10.524L11.6603 1.57424L11.6717 1.49144C11.6717 1.49144 11.6717 1.47717 11.6717 1.46861C11.6717 1.22879 11.4832 1.03465 11.2491 1.02037L11.252 1.01752ZM7.70896 8.87158H4.64557L5.11093 5.61404H8.17432L7.70896 8.87158ZM8.26854 4.94597H5.20514L5.6705 1.68844H8.7339L8.26854 4.94597Z"
                            fill="white"></path>
                        <path d="M20.5509 1.02034H13.8674C13.6504 1.02034 13.4534 1.19164 13.4249 1.40577L11.4606 15.1753H14.3727L16.2941 1.69127H18.0499L16.4197 13.1255H18.0357C18.7523 13.1255 19.4146 12.5488 19.5145 11.8379L20.982 1.56279V1.54852C20.9877 1.52282 20.9934 1.49713 20.9934 1.46858C20.9934 1.22305 20.7964 1.0232 20.5509 1.01749V1.02034Z"
                            fill="white"></path>
                        <path d="M50.7533 0.806259H49.7712C49.637 0.814824 49.5199 0.88049 49.4428 0.97756L49.4 1.04323L40.3183 15.1697H41.4204L43.2333 12.3204H50.739V12.3147L51.6726 15.1697H55.4697L50.7533 0.806259ZM43.6587 11.6495L48.2295 4.48918L50.5049 11.6495H43.6587Z"
                            fill="white"></path>
                        <path d="M60.3291 0.791054H60.2435C60.0522 0.808184 59.8952 0.948078 59.8495 1.1308L59.8409 1.19075L57.5969 15.143H60.9401L63.2469 0.791054H60.3291Z"
                            fill="white"></path>
                    </svg>
                </div>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .logoContainer {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }
                .text {
                    transition: visibility 0s, opacity .3s ease-in-out;
                    opacity: 1;
                    color: #fff;
                }
            `}
            </style>
        </div>
    )
}