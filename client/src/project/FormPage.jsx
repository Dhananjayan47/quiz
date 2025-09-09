import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import "./FormPage.css"
import WinningPage from "./WinningPage";
const FormPage = ({ qPack, qCount, setQCount, setAns ,checkAns,userAns,hide}) => {
    const [store, setStore] = useState('');
    const [point, setPoint] = useState(0);
    const [check, setCheck] = useState(null);
    const [btn, setBtn] = useState(false);
    const[some,setSome]=useState(true)

    useEffect(()=>{
   
    },[userAns])

    const handleChange = (value) => {
        setStore(value);
        some&&setBtn(true)
        // console.log("submitted value is :", value, "Name :", selectedName);
        
    };
    const displayQuestion = qPack.find((q) => q.qno === `q${qCount}`);
    const storeAnswer = (name, e) => {
        e.preventDefault();
        setSome(false)
        setBtn(false)
        // if(userAns[name]){setBtn(false);}
        if(store){
            setAns(prev => ({
            ...prev,
            [name]: store,
        }));
        if(store===checkAns[name]){
            setPoint(prev=>prev+1)
            setCheck(true);
        }else(setCheck(false))
        setStore("");
        setTimeout(() => {
            setQCount((prev) => prev + 1);
            setCheck(null);
            setSome(true)
        }, 3000);}
        else{(alert("Please select the answer"))}
        
    };

    return (
        <div className={check===null?'container':check===true?'container-correct':'container-wrong'}>
            {!displayQuestion ? (
                <WinningPage setPoint={setPoint}setAns={setAns} setQCount={setQCount} point={point} hide={hide}/>
            ) : (
                <form key={displayQuestion.qno} className="question-form">
                    <p className="qCount-style">Question {qCount}/10</p>
                    <h1 className="q-style">{displayQuestion.question}</h1>
                    <RadioGroup
                        name={displayQuestion.qno}
                        value={store}
                        onChange={handleChange}
                    >
                        <Stack direction="column" >
                            <Radio
                                colorScheme="yellow"
                                value={displayQuestion.choice1}
                            >
                                <span className={store=== displayQuestion.choice1?"choice-selected":"choice-color"}>{displayQuestion.choice1}</span>
                            </Radio>
                            <Radio
                                colorScheme="yellow"
                              
                                value={displayQuestion.choice2}
                            >
                                <span className={store=== displayQuestion.choice2?"choice-selected":"choice-color"}>{displayQuestion.choice2}</span>
                            </Radio>
                            <Radio
                                colorScheme="yellow"
                             
                                value={displayQuestion.choice3}
                            >
                                <span className={store=== displayQuestion.choice3?"choice-selected":"choice-color"}>{displayQuestion.choice3}</span>
                            </Radio>
                            <Radio
                                colorScheme="yellow"
                                value={displayQuestion.choice4}
                            >
                                <span className={store=== displayQuestion.choice4?"choice-selected":"choice-color"}>{displayQuestion.choice4}</span>
                            </Radio>
                        </Stack>
                    </RadioGroup>
                    <div className="points-container">
                        <span className="points-shower">{check===null?`Score:${point}`:check===true?'Correct !':'Wrong'
                        }</span>
                        {btn&& <button
                            type="button"
                            name={displayQuestion.qno}
                            onClick={(e) => storeAnswer(e.target.name, e)}
                        >
                            next
                        </button>}
                    </div>
                </form>
            )}
        </div>
    );
};

export default FormPage;
