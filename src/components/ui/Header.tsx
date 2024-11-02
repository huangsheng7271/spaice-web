import {Logo} from "@/components/ui/Logo"
import {SignIn} from "@/components/ui/SignIn"
export const Header = () => {
    return (
        <>
            <div className="platform-ui-service-header-container mweb-titlebar-logo-container">
                <div className="header-left">
                    <Logo/>
                </div>
                <div className="header-center"></div>
                <div className="header-right">
                    <div data-id="Home"></div>
                    <div data-id="Explore"></div>
                    <div data-id="TitleBarAppDownload"></div>
                    <div data-id="TitleBarUserCenter">
                        <SignIn/>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .platform-ui-service-header-container {
                    backdrop-filter: none;
                    -webkit-backdrop-filter: none;
                }
                .platform-ui-service-header-container {
                    align-items: center;
                    -webkit-backdrop-filter: blur(20px);
                    backdrop-filter: blur(20px);
                    {/* background-color: var(--lvv-color-scenes-panel); */}
                    background-color:red;
                    box-sizing: border-box;
                    display: flex;
                    height: 72px;
                    justify-content: space-between;
                    padding: 10px 40px;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    width: 100%;
                    z-index: 99;
                }
                .platform-ui-service-header-container {
                    height: var(--side-menu-titlebar-height) !important;
                    position: absolute;
                }
                .mweb-titlebar-logo-container {
                    -webkit-backdrop-filter: unset !important;
                    backdrop-filter: unset !important;
                    background-color: var(--background-1) !important;
                    padding: 20px 16px 18px 19px !important;
                }
                .platform-ui-service-header-container .header-left {
                    color: var(--lvv-color-text-primary);
                }
                .platform-ui-service-header-container .header-center, .platform-ui-service-header-container .header-left, .platform-ui-service-header-container .header-right {
                    position: relative;
                }
                .platform-ui-service-header-container .header-left, .platform-ui-service-header-container .header-right, .platform-ui-service-header-container .temp-header-for-calc {
                    align-items: center;
                    box-sizing: border-box;
                    display: flex;
                    flex-wrap: wrap;
                }
                .platform-ui-service-header-container .header-right {
                    flex-wrap: nowrap;
                    justify-content: flex-end;
                }
                
                /*使用after伪类实现logo部分的光晕效果*/
                {/* @media (min-width: 1921px) {
                    .global-mweb-container:not(.mobile-not-ipad) .mweb-titlebar-back-container:not(.hide-filter):after, .global-mweb-container:not(.mobile-not-ipad) .mweb-titlebar-logo-container:not(.hide-filter):after {
                        left: calc(50vw - var(--mweb-generate-page-feed-container-max-width) / 2 - var(--mweb-generate-params-container-width) / 2 - 4px) !important;
                    }
                }
                .global-mweb-container:not(.mobile-not-ipad) .mweb-titlebar-back-container:not(.hide-filter):after, .global-mweb-container:not(.mobile-not-ipad) .mweb-titlebar-logo-container:not(.hide-filter):after {
                    background: linear-gradient(168deg, #05eeff 5.03%, #7ea2ff 91.4%);
                    border-radius: 50%;
                    content: "";
                    -webkit-filter: blur(130px);
                    filter: blur(130px);
                    height: 80px;
                    left: 0;
                    pointer-events: none;
                    position: absolute;
                    top: 0;
                    width: 120px;
                    z-index: 300;
                }
                @media (min-width: 1921px) {
                    .mweb-titlebar-logo-container:after {
                        left: calc(50vw - var(--mweb-generate-page-feed-container-max-width) / 2 - var(--mweb-generate-params-container-width) / 2 - 8px) !important;
                    }
                }
                .mweb-titlebar-logo-container:after {
                    background: linear-gradient(168deg, #05eeff 5.03%, #7ea2ff 91.4%);
                    border-radius: 50%;
                    content: "";
                    -webkit-filter: blur(130px);
                    filter: blur(130px);
                    height: 80px;
                    left: 0;
                    pointer-events: none;
                    position: absolute;
                    top: 0;
                    width: 120px;
                    z-index: 300;
                } */}
            `}
            </style>
        </>
    );
}