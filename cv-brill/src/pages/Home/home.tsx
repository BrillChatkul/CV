import brillProfile from "../../assets/Image/brillProfile.jpg"
import "./home.css"

const Home = () => {
    return (
        <div className="home_page">
            <div className="container-fluid">
                <div className="row">
                    <div className="home_profile">
                        <div className="container-fluid">
                            <div className="row justify-content-center mt-3">
                                <div className="col-auto">
                                    <img className="home_imgProfile" src={brillProfile} alt="profileImg"></img>
                                </div>
                            </div>
                            <div className="row justify-content-center my-2">
                                <div className="d-flex justify-content-center position-relative px-0" style={{ "zIndex": "-1" }}>
                                    <div className="home_NameContainer fw-bold rounded">
                                        <div>Chatkul</div>
                                        <div>Rattanarithikul</div>
                                    </div>
                                    <div className="home_NameContainer_shadow rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div className="container home_aboutBox mt-4 rounded">
                            <div className="row">
                                <h4 className="home_AboutMe mb-0">About me</h4>
                            </div>
                            <div className="row pt-2 px-2"><div className="home_AboutMe">
                                Hi, I'm software Engineer. Enthusiastic and hardworking for Web-Development
                                and Microcontroller programming.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="container mt-4 mb-3">
                        <div className="row justify-content-center">
                            <h4 className="col-auto mb-0">Web development</h4>
                        </div>
                        <div className="row justify-content-center">
                            <h6 className="col-10" style={{ "textAlign": "center" }}>Knowledge JavaScript, TypeScript, HTML and CSS</h6>
                        </div>
                        <div className="row justify-content-center">
                            <div className="home_webDevelopment">
                                <div className="container w-75 mt-2 mx-2 px-2 border rounded py-2">
                                    <div className="row justify-content-center"><div className="col-auto h6">Front-end</div></div>
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            React-TypeScript
                                        </div></div>
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            jQuery
                                        </div></div>
                                </div>
                                <div className="container w-75 mt-2 mx-2 px-2 border rounded py-2">
                                    <div className="row justify-content-center"><div className="col-auto h6">Back-end</div></div>
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            ExpressJS
                                        </div></div>
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            PHP
                                        </div></div>
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            MySQL
                                        </div></div>
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            Firebase
                                        </div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-4">
                        <div className="row justify-content-center">
                            <h4 className="col-auto mb-0"><u>Skills</u></h4>
                        </div>
                    </div>

                    <div className="home_webDevelopment">
                        <div className="container mt-4 mb-3">
                            <div className="row justify-content-center">
                                <h4 className="col-auto mb-0">Programming</h4>
                            </div>
                            <div className="row justify-content-center">
                                <h6 className="col-10" style={{ "textAlign": "center" }}>
                                    Knowledge Assembly, C, C#, C++, Java and Python
                                </h6>
                            </div>
                        </div>

                        <div className="container mt-4 mb-3">
                            <div className="row justify-content-center">
                                <h4 className="col-auto mb-0">Microcontroller</h4>
                            </div>
                            <div className="row justify-content-center">
                                <h6 className="col-10" style={{ "textAlign": "center" }}>
                                    Knowledge Embedded C and programming for Arduino, STM32
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="container home_textDescripBox mt-4">
                        <div className="row">
                            <h5 className="home_AboutMe mb-0">Education</h5>
                        </div>
                        <div className="row pt-2 px-2"><div className="home_AboutMe">
                            Bachelor of Engineering in Computer Engineering
                            at King Mongkut's Institute of Technology Ladkrabang.
                        </div>
                        </div>
                        <div className="row px-2"><div className="home_AboutMe">
                            (GPA : 3.53)
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ "width": "100%", "height": "100%", "backgroundColor": "rgb(192, 67, 67)" }}></div>
        </div >
    )
}
export default Home