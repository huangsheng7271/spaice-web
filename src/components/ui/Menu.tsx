import React, { useState } from 'react';
import { Compass, Gift, UserRound, ImagePlus, ShoppingBag, Bookmark, Bell, Mail } from 'lucide-react';

type MenuItem = {
    icon: React.ElementType;
    label: string;
    id: string;
};

type MenuGroup = {
    items: MenuItem[];
    className: string;
};

const initialMenuData: MenuGroup[] = [
    {
        className: "menuGroup-jfQPdZ mweb-menu-group-main",
        items: [
            { icon: ImagePlus, label: '室内生成', id: 'generate' },
            { icon: Compass, label: '探索', id: 'explore' }
        ],
    },
    {
        className: "menuGroup-jfQPdZ mweb-menu-group-tools",
        items: [
            { icon: UserRound, label: '个人主页', id: 'profile' },
            { icon: ShoppingBag, label: '资产', id: 'assets' },
            { icon: Bookmark, label: '收藏', id: 'favorites' },
            { icon: Gift, label: '活动', id: 'activity' },
        ],
    },
    {
        className: "menuGroup-jfQPdZ mweb-menu-group-other",
        items: [
            { icon: Bell, label: '消息', id: 'messages' },
            { icon: Mail, label: '邀请', id: 'invite' },
        ],
    },
];

export const Menu: React.FC = () => {
    const [selectedItemId, setSelectedItemId] = useState('explore');

    const handleItemClick = (itemId: string) => {
        setSelectedItemId(itemId);
    };

    return (
        <div role="menu" className="lv-menu lv-menu-light lv-menu-vertical menu-_pM9FX top-menu-OzXbX5">
            <div className="lv-menu-inner">
                {initialMenuData.map((group, groupIndex) => (
                    <div key={groupIndex} className={group.className}>
                        {group.items.map((item) => (
                            <div
                                key={item.id}
                                className={`lv-menu-item ${selectedItemId === item.id ? 'lv-menu-selected' : ''} lv-menu-item-size-default`}
                                onClick={() => handleItemClick(item.id)}
                            >
                                <div className="inner-menu-Ughms8">
                                    <item.icon size={19}/>
                                    <span style={{opacity: 1}}>{item.label}</span>
                                </div>
                            </div>
                        ))}
                        {groupIndex < initialMenuData.length - 1 && (
                            <div className="split-line-container-wi45va">
                                <div className="split-line-sQWKJF"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
                .menu-_pM9FX.lv-menu {
                    background: var(--side-menu-background);
                    padding: var(--ui-configuration-side-menu-padding);
                }

                .top-menu-OzXbX5 {
                    flex: 1 1;
                    min-height: 100%;
                }

                .lv-menu-light {
                    background-color: var(--lvv-color-scenes-overlay);
                    border-color: var(--lvv-color-line-2);
                }

                .lv-menu {
                    border-radius: 8px;
                    box-sizing: border-box;
                    font-size: 14px;
                    line-height: 1.5715;
                    padding: 8px;
                    position: relative;
                    transition: width .2s cubic-bezier(.34, .69, .1, 1);
                    width: 100%;
                }

                .lv-menu-inner {
                    display: flex;
                    flex-direction: column;
                    overflow: visible;
                }

                .lv-menu-inner {
                    box-sizing: border-box;
                    height: 100%;
                    overflow: overlay;
                    overflow: auto;
                    width: 100%;
                }

                .menuGroup-jfQPdZ:first-child {
                    padding-top: 0;
                }

                .menuGroup-jfQPdZ {
                    border-bottom: 1px solid rgba(7, 50, 71, .06);
                    display: flex;
                    flex-direction: column;
                    gap: var(--side-menu-gap);
                    padding-bottom: 20px;
                    padding-top: 20px;
                }

                .mweb-menu-group-main, .mweb-menu-group-tools, .mweb-menu-group-other {
                    padding: 0;
                    --side-menu-gap: 4px;
                }

                .menu-_pM9FX .lv-menu-item.lv-menu-selected {
                    background: var(--Fill-Transparency-Hover, rgba(69, 108, 128, .12));
                    color: var(--lvv-color-text-primary, #090c14);
                }

                .menu-_pM9FX .lv-menu-item.lv-menu-item-size-default {
                    background: var(--side-menu-background);
                    border-radius: 8px;
                    box-sizing: border-box;
                    color: var(--lvv-color-text-secondary, rgba(17, 26, 44, .7));
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 16px;
                    padding: 0;
                }
                .lv-menu-inner .lv-menu-item.lv-menu-item-size-default {
                    border-radius: 8px;
                    color: var(--text-tertiary);
                    font-size: 15px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 22px;
                    margin-bottom: 0;
                    overflow: visible;
                    transition: background-color .2s ease-out, color .1s ease-out;
                }
                .lv-menu-light .lv-menu-item.lv-menu-selected {
                    background-color: var(--lvv-color-fill-bg-4);
                }

                .lv-menu-light .lv-menu-group-title.lv-menu-selected, .lv-menu-light .lv-menu-inline-header.lv-menu-selected, .lv-menu-light .lv-menu-item.lv-menu-selected, .lv-menu-light .lv-menu-pop-header.lv-menu-selected {
                    color: var(--lvv-color-text-primary);
                    font-weight: 700;
                }

                .lv-menu-inner .lv-menu-item.lv-menu-item-size-default:hover, .lv-menu-inner .lv-menu-item.lv-menu-selected {
                    background: var(--block-default);
                    color: var(--text-primary);
                }

                .lv-menu-vertical .lv-menu-item-size-default {
                    line-height: 48px;
                    padding: 0 16px;
                }

                .lv-menu-vertical .lv-menu-group-title, .lv-menu-vertical .lv-menu-inline-header, .lv-menu-vertical .lv-menu-item, .lv-menu-vertical .lv-menu-pop-header {
                    margin-bottom: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .lv-menu-vertical .lv-menu-group-title, .lv-menu-vertical .lv-menu-inline-header, .lv-menu-vertical .lv-menu-item, .lv-menu-vertical .lv-menu-pop-header {
                    line-height: 36px;
                    padding: 0 8px;
                }

                .lv-menu-light .lv-menu-group-title, .lv-menu-light .lv-menu-inline-header, .lv-menu-light .lv-menu-item, .lv-menu-light .lv-menu-pop-header {
                    background-color: var(--lvv-color-scenes-overlay);
                    color: var(--lvv-color-text-primary);
                }

                .lv-menu .lv-menu-group-title, .lv-menu .lv-menu-inline-header, .lv-menu .lv-menu-item, .lv-menu .lv-menu-pop-header {
                    border-radius: 6px;
                    box-sizing: border-box;
                    cursor: pointer;
                    position: relative;
                }

                .inner-menu-Ughms8 {
                    align-items: center;
                    display: flex;
                    gap: var(--side-menu-inner-menu-gap, 12px);
                    padding: var(--side-menu-item-padding);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                .split-line-container-wi45va {
                    align-items: center;
                    box-sizing: border-box;
                    display: flex;
                    height: 24px;
                    margin: 0;
                    padding: var(--side-menu-item-padding);
                    width: 100%;
                }

                .split-line-sQWKJF {
                    background: var(--line-2);
                    height: 1px;
                    width: 100%;
                }

                .menuGroupName-WhTphV {
                    color: rgba(24, 51, 78, .4);
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 14px;
                    margin-bottom: 4px;
                    overflow: hidden;
                    padding: 4px 16px;
                    text-overflow: ellipsis;
                    text-wrap: nowrap;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    white-space: nowrap;
                }

                .mweb-menu-group-tools-name {
                    color: var(--text-primary);
                    font-size: 16px;
                    font-weight: 500;
                    gap: 4px;
                    line-height: 20px;
                    margin-bottom: unset;
                    padding: 14px 10px;
                    width: var(--side-menu-group-name-width);
                }
            `}</style>
        </div>
    );
};

{/* <div role="menu" className="lv-menu lv-menu-light lv-menu-vertical menu-_pM9FX top-menu-OzXbX5">
    <div className="lv-menu-inner">
        <div className="menuGroup-jfQPdZ mweb-menu-group-main">
            <div className="lv-menu-item lv-menu-selected lv-menu-item-size-default">
                <div className="inner-menu-Ughms8">
                    <Compass size={"19"}/>
                    <span style={{opacity: 1}}>探索</span>
                </div>
            </div>
            <div className="lv-menu-item lv-menu-item-size-default">
                <div className="inner-menu-Ughms8">
                    <Gift size={"19"}/>
                    <span style={{opacity: 1}}>活动</span>
                </div>
            </div>
            <div className="lv-menu-item lv-menu-item-size-default">
                <div className="inner-menu-Ughms8">
                    <UserRound size={"19"}/>
                    <span style={{opacity: 1}}>个人主页</span>
                </div>
            </div>
            <div className="split-line-container-wi45va">
                <div className="split-line-sQWKJF"></div>
            </div>
        </div>
        <div className="menuGroup-jfQPdZ mweb-menu-group-tools">
           <div className="menuGroupName-WhTphV mweb-menu-group-tools-name">
                创作中心
            </div>
            <div className="lv-menu-item lv-menu-item-size-default">
                <div className="inner-menu-Ughms8">
                    <ImagePlus size={"19"}/>
                    <span style={{opacity: 1}}>室内生成</span>
                </div>
            </div>
            <div className="lv-menu-item lv-menu-item-size-default">
                <div className="inner-menu-Ughms8">
                    <ShoppingBag size={"19"}/>
                    <span style={{opacity: 1}}>资产</span>
                </div>
            </div>
            <div className="lv-menu-item lv-menu-item-size-default">
                <div className="inner-menu-Ughms8">
                    <Bookmark size={"19"}/>
                    <span style={{opacity: 1}}>收藏</span>
                </div>
            </div>
        </div>
        <div className="menuGroup-jfQPdZ mweb-menu-group-other">
            <div className="split-line-container-wi45va">
                <div className="split-line-sQWKJF"></div>
            </div>
            <div className="lv-menu-item lv-menu-item-size-default">
                <div className="inner-menu-Ughms8">
                    <Bell size={"19"}/>
                    <span style={{opacity: 1}}>消息</span>
                </div>
            </div>
            <div className="lv-menu-item lv-menu-item-size-default">
                <div className="inner-menu-Ughms8">
                    <Mail size={"19"}/>
                    <span style={{opacity: 1}}>邀请</span>
                </div>
            </div>
        </div>
    </div>
</div>*/}