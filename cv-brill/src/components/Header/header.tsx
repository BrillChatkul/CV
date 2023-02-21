
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./header.css"
import { BaseURL } from "../../config/config";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { BsJustify, BsXLg } from "react-icons/bs"

const Header = () => {
    //state
    const [abSelect, setAbSelect] = useState("");
    const [exSelect, setExSelect] = useState("");
    const [contactSelect, setContactSelect] = useState("");
    const [exitExNav, setExitExNav] = useState(" d-none")
    const [expandNav, setExpandNav] = useState(" ");

    //const
    const displayNone = " d-none";
    const displayShow = " ";

    //hook
    const navigate = useNavigate();
    const { windowHeight, windowWidth } = useWindowDimensions();

    //utilis function
    const resetHover = () => {
        setAbSelect("");
        setExSelect("");
        setContactSelect("");
    }

    //handleEvent
    const handleAboutMe = useCallback(async () => {
        await resetHover();
        setAbSelect(" header_select_btn");
        navigate(`/`);

    }, [resetHover]);

    const handleExperience = useCallback(async () => {
        await resetHover();
        setExSelect(" header_select_btn");
        navigate(`/experience`);

    }, [resetHover]);

    const handleContact = useCallback(async () => {
        await resetHover();
        setContactSelect(" header_select_btn");
        navigate(`/contact`);

    }, [resetHover]);

    const handleNav = useCallback(async () => {
        if (expandNav === displayShow) {
            setExpandNav(displayNone);
            setExitExNav(displayShow);
        }
        else {
            setExpandNav(displayShow);
            setExitExNav(displayNone);
        }
    }, [expandNav])

    return (
        <div className="header_bar container-fluid">
            <div className="header_nav row justify-content-between align-items-center">
                <div className="col-auto text-white h5 mb-0">
                    BrillChatkul
                </div>

                <div className={"col-auto text-white h5 mb-0" + expandNav} onClick={handleNav}>
                    <BsJustify />
                </div>

                <div className={"col-auto text-white" + exitExNav} onClick={handleNav}>
                    <BsXLg />
                </div>
                {/* <div className={"col-auto d-flex" + exitExNav}>
                    <div className={"header_btn mx-3 my-0" + abSelect} onClick={handleAboutMe}>ABOUT ME</div>
                    <div className={"header_btn mx-3 my-0" + exSelect} onClick={handleExperience}>EXPERIENCE</div>
                    <div className={"header_btn mx-3 my-0" + contactSelect} onClick={handleContact}>CONTACT</div>
                </div> */}
            </div>
            <div className={"row" + exitExNav}>
                <div className="d-flex flex-column header_expand px-0">
                    <div className={"header_expandBtn p-2"} onClick={()=>{handleAboutMe();handleNav();}}>ABOUT ME</div>
                    <div className={"header_expandBtn p-2"} onClick={()=>{handleExperience();handleNav();}}>EXPERIENCE</div>
                    <div className={"header_expandBtn p-2"} onClick={()=>{handleContact();handleNav();}}>CONTACT</div>
                </div>
            </div>

        </div>)
}
export default Header