import React, { useState,useEffect } from 'react';
import axios from 'axios'
import "./WelcomePage.css"

const WelcomePage = ({hidePage}) => {
    const [storeData, setStoreData] = useState();
    const [isEmpty, setIsEmpty] = useState(false);
    const [isMsgEmpty, setIsMsgEmpty] = useState(false);
    const [getData, setGetData] = useState({name:'',message:''});
    const giveData=(e)=>{
        setGetData({...getData,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        console.log(storeData);
        }
    ,[storeData])
    useEffect(()=>{
        if(isEmpty){
            const timer=setTimeout(() => {
                setIsEmpty(false)
            }, 3000);
            return ()=>clearTimeout(timer)
        }
    },[isEmpty])
    useEffect(()=>{
        if(isMsgEmpty){
            const timer=setTimeout(() => {
                setIsMsgEmpty(false)
            }, 3000);
            return ()=>clearTimeout(timer)
        }
    },[isMsgEmpty])

    const submitData=async(e)=>{
        e.preventDefault();

        if(getData.name===""){
            setIsEmpty(true)
            if(getData.message===""){
                setIsMsgEmpty(true)

            }
        }else if(getData.message===""){
            setIsMsgEmpty(true)
        }
        else{
        const UpdatedStoreData=getData;
        setStoreData(UpdatedStoreData)
        setGetData({name:'',message:''});
        try{
            const response=await axios.post('http://localhost:5000/submit',UpdatedStoreData);
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    
        hidePage(true); 
    }
    }

    return <div className='welcomePage-container'>
    <form onSubmit={submitData}  className='form-container'>
        <div className="placeLabel">
        <label htmlFor="nameInput">{!isEmpty?"Enter your name :":"Must be not empty"}</label>
        <input type="text" id="nameInput" placeholder='Enter Name'name='name' value={getData.name} onChange={giveData}/>
        </div>
       <div className="placeLabel">
       <label htmlFor="messageInput">{!isMsgEmpty?"Send Message :":"Must be not empty"}</label>
       <input type="text" id="messageInput" name='message' placeholder='Enter Message'value={getData.message} onChange={giveData} />
       </div>
        <input type="submit" value="Send" />
    </form>
    </div>;
}
 
export default WelcomePage;
