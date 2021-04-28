import React, { useEffect, useState } from 'react';
import { Global } from '../../Data/Global'
import './Dialog.css'
import '../../App.css'

function Dialog(props) {
    const [option, setOption] = useState(Global.option);
    const [optionImage, setOptionImage] = useState("");

    useEffect(() => {
        if (option === "option1")
            setOptionImage("https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png");
        else
            setOptionImage("https://image.shutterstock.com/image-photo/kiev-ukraine-february-11-2016-260nw-377958841.jpg");
    }, [option]);
 
    const optionChanged = (e) => {
        var option = e.target.id;
        setOption(option);
        Global.selected = true;
    }

    const formSubmit = (e) => {
        e.preventDefault();
        Global.option = option;
        props.afterFormSubmit();
    }

    return (
        <div className="dialog-background">
            <div className="dialog-content d-flex">
                <div className="w-50">
                    <h1>{props.title}</h1>
                    <img className="kopish-logo" src="https://yt3.ggpht.com/ytc/AAUvwnjCfyaFVkTj24qkd8RXkKfpiyINYt8BVK9Abl5jEA=s176-c-k-c0x00ffffff-no-rj" alt="" />
                </div>
                <form className="w-50 form text-center d-flex flex-column justify-content-between align-items-center">
                    <div className="d-flex">
                        <div>
                            <label htmlFor="option1">LFC Only</label>
                            <input type="radio" id="option1" name="option" onClickCapture={optionChanged} />
                        </div>
                        <div>
                            <label htmlFor="option2">Double Trouble</label>
                            <input type="radio" id="option2" name="option" onClickCapture={optionChanged} />
                        </div>
                    </div>
                    <img className="optionImage" src={optionImage} alt="" />
                    <button className="btn" onClick={formSubmit}>Let's go</button>
                </form>
            </div>
        </div>
    );
}

export default Dialog;