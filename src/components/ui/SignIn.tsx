import { Tooltip } from "antd";
import { Sparkle } from 'lucide-react';
export const SignIn= () => {
    return (
        <div>
            <div className="signIn-Nu6hYC">
                <div className="creditWrapper-PSYIae" style={{pointerEvents: "all"}}>
                    <Tooltip title={"其中 64 积分将在24小时内过期"} color={"#2f343e"}>
                        <div className="creditWrapper-tkz5hQ">
                            <div className="credit-CIfJTE">
                                <Sparkle size={15} color={"#5ddbf1"}></Sparkle>
                                <span className="creditText-b7y6Yt">64</span>
                            </div>
                        </div>
                    </Tooltip>
                    <div className="divider-eDOiGM"></div>
                    <Tooltip title={"还未开通会员"} color={"#2f343e"}>
                        <div className="vipTagWrapper-YymsES">
                            <div className="container-FVv4CA">
                                <div className="vipText-FaRrFY">开会员 得积分</div>
                            </div>
                        </div>
                    </Tooltip>
                </div>
                <div className="container-sRuVWo">
                    <div>
                        <div className="avatarContainer-hvVBTI">
                            <div className="avatar-snVMmj">
                                <div className="container-NcFomj avatar-tGQBEA avatarHover-TOKjXN">
                                    <div style={{transition: "opacity 300ms ease 0s", opacity: 1}}>
                                        <img className="image-mcNK02"
                                             src="https://p3-passport.byteacctimg.com/img/user-avatar/6320dc40314aea75830e937d5b647d62~300x300.image"
                                             draggable="false" crossOrigin="anonymous"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .signIn-Nu6hYC {
                    align-items: center;
                    border: 1px solid var(--line-level-3);
                    border-radius: 8px;
                    box-sizing: border-box;
                    color: var(--text-tertiary);
                    display: flex;
                    flex-direction: row;
                    gap: 16px;
                    justify-content: center;
                }
                .creditWrapper-PSYIae {
                    align-items: center;
                    border: .5px solid var(--line-2);
                    border-radius: 16px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    height: 32px;
                    overflow: hidden;
                }
                .creditWrapper-tkz5hQ {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    height: 100%;
                    padding: 0 8px;
                    transition: background-color 0.2s ease-in-out;
                }
                .creditWrapper-tkz5hQ:hover {
                    background-color: hsla(0, 0%, 100%, .08);
                }
                .credit-CIfJTE {
                    align-items: center;
                    display: flex;
                    gap: 4px;
                }
                .credit-CIfJTE .creditText-b7y6Yt {
                    color: #5ddbf1;
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 20px;
                }
                .creditWrapper-PSYIae .divider-eDOiGM {
                    background-color: var(--line-2);
                    height: 11px;
                    width: 1px;
                }
                .vipTagWrapper-YymsES {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    height: 100%;
                    padding: 0px 14px 0px 8px;
                    transition: background-color 0.2s ease-in-out;
                }
                .vipTagWrapper-YymsES:hover {
                    background-color: rgba(255, 255, 255, 0.08);
                }
                .container-FVv4CA {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    gap: 4px;
                }
                .container-FVv4CA .vipText-FaRrFY {
                    background-clip: text;
                    -webkit-background-clip: text;
                    background-image: linear-gradient(91deg, #00e6ff .28%, #6ee4f5 54.13%, #01b2db);
                    color: transparent;
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 18px;
                }

                .container-sRuVWo {
                    position: relative;
                }
                .signIn-Nu6hYC .avatarContainer-hvVBTI {
                    align-items: center;
                    box-sizing: border-box;
                    cursor: pointer;
                    display: flex;
                    gap: 10px;
                    position: relative;
                }
                .signIn-Nu6hYC .avatarContainer-hvVBTI .avatar-snVMmj {
                    height: 32px;
                    width: 32px;
                }
                .avatar-tGQBEA {
                    border-radius: 50%;
                    height: 100%;
                    width: 100%;
                }
                .container-NcFomj {
                    height: 100%;
                    position: relative;
                    width: 100%;
                }
                .container-NcFomj .image-mcNK02 {
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    transition: opacity .1s ease;
                    width: 100%;
                }
                .avatar-tGQBEA img {
                    border-radius: 50%;
                    object-fit: cover;
                }
                img {
                    border-style: none;
                }
            `}</style>
        </div>
    );
}