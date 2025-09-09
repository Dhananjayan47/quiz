import React, { useEffect, useState } from 'react';
import "./WinningPage.css"
const WinningPage = ({point,setAns,setQCount,setPoint,hide}) => {

    const msg = {
        msg1: {
            main: "Hokage-level !!!",
            next: " You're a true Naruto expert!",
        },
        msg2: {
            main: "Jonin rank !",
            next: "You really know your shinobi stuff!",
        },
        msg3: {
            main: " Chunin level .",
            next: "Not bad, but there's room to grow!",
        },
        msg4: {
            main: "Genin level...",
            next: "Time for some training with Kakashi!",
        },
        msg5: {
            main: "Academy student...",
            next: "Better start watching Naruto from Episode 1!",
        },
    };
    const [mainMsg, setMainMsg] = useState('');
    const [nextMsg, setNextMsg] = useState('');

   useEffect(()=>{ let mainResult,nextResult;
    if(point===10){
        mainResult=msg.msg1.main;
        nextResult=msg.msg1.next;
    }else if(point===8){
        mainResult=msg.msg2.main
        nextResult=msg.msg2.next
    }else if(point===5){
        mainResult=msg.msg3.main
        nextResult=msg.msg3.next
    }else if(point===3){
        mainResult=msg.msg4.main
        nextResult=msg.msg4.next
    }else{
        mainResult=msg.msg5.main
        nextResult=msg.msg5.next
    }
    setMainMsg(mainResult);
    setNextMsg(nextResult);},[point])

    const restart=()=>{
        setAns({});
        setQCount(1);
        setPoint(0);
        hide(false)
    }
    return <main className='winning-page'>
            
        <p className='font-effect'>hey you</p>
        <p className='font-effect'>{mainMsg}</p>
        <p className='font-effect'>{nextMsg}</p>
    
        <button className='restart' onClick={restart}>Restart</button>
    </main> ;
}
 
export default WinningPage;