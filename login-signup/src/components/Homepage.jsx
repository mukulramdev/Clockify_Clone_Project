import React, { useState } from 'react';
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import { HOMEP2, HOMEP2_2, HOMEP2_BTN1 } from "./Homecss";
import { DarkmodeButton, SECONDPARTSC } from "./Homecss";
import { HOMEP5, HOMEP5_5, HOMEP5_5_5 } from "./Homecss";
import { Signbutt2 } from "./Homecss";
import { HOMEP7 } from "./Homecss"

const Homepage = () => {
    const [show, setshow] = useState(false);
    const [data, setData] = useState([])
   const navigate = useNavigate();
    const getdata = () => {

        axios
            .get(`https://json-server-mocker-pooran.herokuapp.com/divdata`)
            .then((res) => {
                console.log(res);

                setData(res.data);
            })
            .catch((err) => { });
    }

    React.useEffect(() => {
        getdata()
    }, [])

    const Changepage = ()=>{
        localStorage.setItem("pagedata",true);
        navigate('/login')
     }

    return (
        <div style={{ margin: "auto" }}>
            <HOMEP2>
                The most popular free time tracker for teams
            </HOMEP2>
            <HOMEP2_2>
                Time tracking software used by millions. Clockify is a simple time
                <br />
                tracker and timesheet app that lets you and your team track work <br />
                hours across projects. Unlimited users, free forever.
            </HOMEP2_2>

            <Link to={`/signup`} style={{ textDecoration: "none" }}>
                <HOMEP2_BTN1>
                    START TRACING TIME-IT'S FREE!
                </HOMEP2_BTN1>
            </Link>

            <br />
            <br />
            <a
                style={{ textDecoration: "none" }}
                href="https://clockify.me/customers"
            >
                <img
                    src="https://clockify.me/assets/images/signed-up-icon.svg"
                    alt=""
                />
                103,466 people signed up last month
            </a>
            <br />
            <br />
            <div style={{marginLeft:'250px'}} >
                <img
                    src="https://clockify.me/assets/images/customers-light-gray-3.svg"
                    alt=""
                />


                {show ? <SECONDPARTSC
                    src="https://clockify.me/assets/images/time-tracker-dark-screenshot.svg"
                    alt=""
                /> : <SECONDPARTSC
                    src="https://clockify.me/assets/images/time-tracker-screenshot.svg"
                    alt="s"
                />
                }


            </div>
            <DarkmodeButton

                style={{ textAlign: "center", padding: "4px" }}
                onClick={() => setshow(!show)}>
                {!show ? "Dark" : "Light"}

            </DarkmodeButton>
            <br />
            <br />
            <HOMEP2>
                Time management features
            </HOMEP2>
            <HOMEP2_2>
                Track productivity, attendance, and billable hours with a simple <br />
                time tracker and timesheet.

            </HOMEP2_2>
            <br />
            <br />
            <div style={{ display: "flex", marginLeft: "16%" }}>
                <div style={{ marginTop: "60px", marginLeft: "30px", width: "600px" }}>
                    <HOMEP5>TIMEKEEPING</HOMEP5>
                    <HOMEP5_5><HOMEP5_5_5 >✓</HOMEP5_5_5> Track hours using a timer</HOMEP5_5>
                    <HOMEP5_5><HOMEP5_5_5 >✓</HOMEP5_5_5> Log time in a timesheet</HOMEP5_5>
                    <HOMEP5_5><HOMEP5_5_5 >✓</HOMEP5_5_5> Manage time in calendar</HOMEP5_5>
                    <HOMEP5_5><HOMEP5_5_5 >✓</HOMEP5_5_5> Categorize time by project</HOMEP5_5>


                </div>
                <div>
                    <img src="https://clockify.me/assets/images/feature-time-tracker.svg" alt="" style={{ marginRight: "90px", height: "400px" }} />

                </div>
            </div>

            <br />  <br />  <br /><br />

            <div style={{ display: "flex", marginLeft: "16%" }}>

                <div>
                    <img src="https://clockify.me/assets/images/feature-time-report.svg" alt="" style={{ marginRight: "90px", height: "450px" }} />

                </div>
                <div style={{ marginTop: "100px", marginLeft: "30px", width: "600px" }}>
                    <HOMEP5>TIMEKEEPING</HOMEP5>
                    <HOMEP5_5><HOMEP5_5_5>✓</HOMEP5_5_5> Track hours using a timer</HOMEP5_5>
                    <HOMEP5_5><HOMEP5_5_5>✓</HOMEP5_5_5> Log time in a timesheet</HOMEP5_5>
                    <HOMEP5_5><HOMEP5_5_5>✓</HOMEP5_5_5> Manage time in calendar</HOMEP5_5>
                    <HOMEP5_5><HOMEP5_5_5>✓</HOMEP5_5_5> Categorize time by project</HOMEP5_5>


                </div>

            </div>

            <br />  <br />  <br /><br />
            <div style={{ display: "flex", marginLeft: "16%" }}>
                <div style={{ marginTop: "100px", marginLeft: "30px", width: "600px" }}>
                    <HOMEP5>TEAM ACTIVITY</HOMEP5>
                    <HOMEP5_5><HOMEP5_5_5 >✓</HOMEP5_5_5> Invite whole team</HOMEP5_5>
                    <HOMEP5_5><HOMEP5_5_5 >✓</HOMEP5_5_5>  Set hourly rates</HOMEP5_5>
                    <HOMEP5_5><HOMEP5_5_5 >✓</HOMEP5_5_5> See current activity</HOMEP5_5>
                    <HOMEP5_5><HOMEP5_5_5 >✓</HOMEP5_5_5> Integrate with other apps</HOMEP5_5>



                </div>
                <div>
                    <img src="https://clockify.me/assets/images/feature-team-activity.svg" alt="" style={{ marginRight: "90px", height: "450px" }} />

                </div>
            </div>

            <br />  <br />  <br /><br />

            <Link to={`/features`} style={{ textDecoration: "none" }}>
                <HOMEP2_BTN1>

                    SEE ALL FEATURES
                </HOMEP2_BTN1>
            </Link>
            <br />
            <br />
            <div>
                <HOMEP2>Time tracking apps</HOMEP2>
                <HOMEP2_2>
                    Clockify works across devices. Track time from anywhere — all <br />
                    data is synced online.
                </HOMEP2_2>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <img
                        src="https://clockify.me/assets/images/app-desktop-new.png"
                        alt=""
                    />
                    <h3>DESKTOP APP</h3>
                    <Signbutt2>
                        <a
                            href="https://clockify.me/windows-time-tracking"
                            style={{ textDecoration: "none" }}
                        >
                            Windows
                        </a>
                    </Signbutt2>
                    <Signbutt2>
                        <a
                            href="https://clockify.me/mac-time-tracking"
                            style={{ textDecoration: "none" }}
                        >
                            Mac
                        </a>
                    </Signbutt2>
                    <Signbutt2>
                        <a
                            href="https://clockify.me/linux-time-tracking"
                            style={{ textDecoration: "none" }}
                        >
                            Linux
                        </a>
                    </Signbutt2>
                </div>
                <div>
                    <img
                        src="https://clockify.me/assets/images/app-mobile-new.png"
                        alt=""
                    />
                    <h3>MOBILE APP</h3>
                    <Signbutt2>
                        <a
                            href="https://clockify.me/android-time-tracking"
                            style={{ textDecoration: "none" }}
                        >
                            Android
                        </a>
                    </Signbutt2>
                    <Signbutt2>
                        <a
                            href="https://clockify.me/iphone-time-tracking"
                            style={{ textDecoration: "none" }}
                        >
                            ios
                        </a>
                    </Signbutt2>
                </div>
                <div>
                    <img src="https://clockify.me/assets/images/app-web-new.png" alt="" />
                    <h3>BROWSER APP</h3>
                    <Signbutt2>
                        <a
                            href="https://clockify.me/edge-time-tracking"
                            style={{ textDecoration: "none" }}
                        >
                            Edge
                        </a>
                    </Signbutt2>
                    <Signbutt2>
                        <a
                            href="https://clockify.me/chrome-time-tracking"
                            style={{ textDecoration: "none" }}
                        >
                            Chrome
                        </a>
                    </Signbutt2>
                    <Signbutt2>
                        <a
                            href="https://clockify.me/firefox-time-tracking"
                            style={{ textDecoration: "none" }}
                        >
                            FireFox
                        </a>
                    </Signbutt2>
                </div>
            </div>
            <br />
            <br />
            <div style={{ marginLeft: "100px" }}>

                <div style={{ display: "flex", marginLeft: "16%" }}>

                    <div>
                        <img src="https://clockify.me/assets/images/free-forever-clock-4.svg" alt="" style={{ marginRight: "90px", height: "450px" }} />

                    </div>
                    <div style={{ marginTop: "30px", marginLeft: "30px", width: "600px" }}>
                        <HOMEP5 style={{ fontSize: "54px", color: "#03A9F4" }}>FREE <br />FOREVER!</HOMEP5>
                        <HOMEP5_5><HOMEP5_5_5>✓</HOMEP5_5_5> Unlimited users</HOMEP5_5>
                        <HOMEP5_5><HOMEP5_5_5>✓</HOMEP5_5_5>  Unlimited tracking</HOMEP5_5>
                        <HOMEP5_5><HOMEP5_5_5>✓</HOMEP5_5_5> Unlimited projects</HOMEP5_5>

                    </div>
                </div>
            </div>
            <div style={{ marginTop: "200px" }}>
                <HOMEP2>
                    Start tracking time with Clockify
                </HOMEP2>
                <HOMEP2_2 style={{
                    fontSize: "15px", fontFamily: ""
                }}>
                    Unlimited users

                    •

                    Cancel anytime

                    •

                    Free forever
                </HOMEP2_2>

                <Link onClick={Changepage} to={`/signup`} style={{ textDecoration: "none" }}>
                    <HOMEP2_BTN1>
                        CREATE FREE ACCOUNT
                    </HOMEP2_BTN1>
                </Link>

                <br />
                <br />
                <a
                    style={{ textDecoration: "none" }}
                    href="https://clockify.me/customers"
                >
                    <img
                        src="https://clockify.me/assets/images/signed-up-icon.svg"
                        alt=""
                    />
                    103,466 people signed up last month
                </a>
            </div>
            <HOMEP2>
                Join millions who track time with Clockify
            </HOMEP2>
            <img src="https://clockify.me/assets/images/four-seven-rating-stars.svg" alt="" />
            <HOMEP2_2 style={{ fontSize: "13px" }}>
                4.7 CUSTOMER RATING<br />
                1,400+ REVIEWS

            </HOMEP2_2>
            <br />
            <br />

            <div>
                <div>
                    {data?.map((item) =>
                        <HOMEP7 >
                            <div style={{ marginLeft: "10px" }}>
                                <h3 style={{ fontSize: "13px", color: " #3D4853", marginRight: "80px" }}>{item.titile}</h3>
                                <h4 style={{ fontSize: "16px", marginRight: "80px" }}>{item.img}</h4>
                                <p style={{ fontSize: "13px", color: "#718191", fontWeight: "bold" }}>{item.desc}</p>
                                <h5 style={{ fontSize: "10px", color: "#718191", marginRight: "150px" }}> —  {item.name}</h5>
                            </div>
                        </HOMEP7>

                    )}

                </div>
                <div>
                    <img src="" alt="" />

                </div>

            </div>


        </div>
    )
}

export default Homepage
