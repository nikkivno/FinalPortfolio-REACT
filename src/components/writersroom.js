import React from "react";
import '../styles/writersroom.css';
import writerlogin from '../images/writers-room-login-page.png';
import writerongoing from '../images/writers-room-ongoing.png';
import writerprompt from '../images/writers-room-prompt.png';
import writerstep2 from '../images/writers-room-step2.png';
import writerwriting from '../images/writers-room-writing.png';
import maingif from '../images/WR Main Page.gif'

function WritersRoom () {
    return (
        <>
            <h2 id="writertitle">Writer's Room Website Samples</h2>
            <p id="writerparagraph">Full website will be online soon</p>  
            <div className="webimages">
                <img className="wrimg" src={maingif} alt="GIF of Writer's Room 'Main' Page"/>
                <img className="wrimg" src={writerlogin} alt="Writer's Room 'Login' Page"/>
                <img className="wrimg" src={writerongoing} alt="Writer's Room 'Ongoing Work' page"/>  
                <img className="wrimg" src={writerprompt} alt="Writer's Room 'Prompt' Page"/>
                <img className="wrimg" src={writerstep2} alt="Writer's Room 'Step 2' Page"/>
                <img className="wrimg" src={writerwriting} alt="Writer's Room 'Writing' Page"/>
            </div>          
        </>
    )
}

export default WritersRoom;
