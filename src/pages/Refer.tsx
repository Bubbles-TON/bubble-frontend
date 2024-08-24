import "../styles/Refer.css";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import orb from "../assets/orb.png";
import ProgressBar from "../features/ProgressBar";
import border from "../assets/border.png";
import avatar from "../assets/avatar.png";

export default function Refer() {
    const [shards] = useState(2059);
    const [percentage] = useState(115); // Removed <number> since TypeScript will infer the type
    const [profiles] = useState([{
        border: border,
        profile: avatar,
        name: "CryptoGuy",
        level: 6,
    }, {
        border: border,
        profile: avatar,
        name: "CryptoGuy",
        level: 6,
    }, {
        border: border,
        profile: avatar,
        name: "CryptoGuy",
        level: 6,
    },{
        border: border,
        profile: avatar,
        name: "CryptoGuy",
        level: 6,
    }]);

    return (
        <Box>
            <div className="refer-desc">
                <p className="text medium">Get free swipes with friends.</p>
                <p className="text medium">Earn 20% of their shards</p>
            </div>
            <div className="friends-invited-container">
                <p className="text medium">Friends invited</p>
                {/* list of friends */}
                {profiles.map((profile, index) => (
                    <div key={index} className="friends-box">
                        <div className="avatar-container">
                            <img src={profile.border} alt="" className="border-img" />
                            <img src={profile.profile} alt="" className="avatar-img" />
                        </div>
                        <div style={{ width: "100%" }}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    width: "90%",
                                    margin: "auto",
                                }}
                            >
                                <div style={{ flexGrow: 1 }}>
                                    <p className="text noLH">{profile.name}</p>
                                    <p className="text noLH">Level {profile.level}</p>
                                </div>
                                <div>
                                    <Button className="claim-btn smallBtn">Claim</Button>
                                </div>
                            </div>
                            <ProgressBar user={percentage} />
                        </div>
                    </div>
                ))}

            </div>
            <div className="shards-earned-container">
                <img src={orb} alt="" />
                <p className="text noLH medium">{shards}</p>
                <p className="text noLH small">Shards Earned</p>
                <Button className="claim-btn bigbtn">Claim</Button>
            </div>
        </Box>
    );
}
