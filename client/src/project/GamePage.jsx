import React, { useState, useEffect } from "react";
import "./GamePage.css";
import FormPage from "./FormPage";
import AudioPage from "./AudioPlayer";
import WelcomePage from "./WelcomePage";

const FrontPage = () => {
    const allQuestion = [
        {
            qno: "q1",
            question: "Who was the first jinchūriki of the Nine-Tails (Kurama)?",
            choice1: "Naruto Uzumaki",
            choice2: "Hashirama Senju",
            choice3: "Mito Uzumaki",
            choice4: "Kushina Uzumaki",
        },
        {
            qno: "q2",
            question: "What is the name of Kakashi’s Mangekyō Sharingan technique?",
            choice1: " Amaterasu",
            choice2: "Kamui",
            choice3: "Tsukuyomi",
            choice4: "Susanoo",
        },
        {
            qno: "q3",
            question: "What was the primary goal of Pain (Nagato)?",
            choice1: "Destroy all villages",
            choice2: "Become Hokage",
            choice3: "Bring peace through pain",
            choice4: "Revive the Uchiha clan",
        },
        {
            qno: "q4",
            question: "Who was the original creator of the Akatsuki organization?",
            choice1: "Yahiko",
            choice2: "Nagato",
            choice3: "Obito Uchiha",
            choice4: "Madara Uchiha",
        },
        {
            qno: "q5",
            question: "What is the ability of Shikamaru Nara’s clan?",
            choice1: "Shadow Possession",
            choice2: "Master Mind",
            choice3: "Mind Tranfer",
            choice4: "Planning King",
        },
        {
            qno: "q6",
            question: "Which Akatsuki member used puppets in battle?",
            choice1: "Sasori",
            choice2: "Kisame",
            choice3: "Deidara",
            choice4: "Hidan",
        },
        {
            qno: "q7",
            question: "What is the core fighting style of the Hyuga clan?",
            choice1: "Iron Fist",
            choice2: "Gentle Fist",
            choice3: "Strong Fist",
            choice4: "Soft Step Twin Lion Fists",
        },
        {
            qno: "q8",
            question: "What is the name of Naruto’s mother?",
            choice1: "Sakura",
            choice2: "Rin",
            choice3: "Tsunade",
            choice4: "Kushina",
        },
        {
            qno: "q9",
            question:
                "Which Akatsuki member had an immortal body due to a cult?",
            choice1: "Kakuzu",
            choice2: "Hidan",
            choice3: "Konan",
            choice4: "Deidara",
        },
        {
            qno: "q10",
            question: "Who was known as the 'Yellow Flash of the Leaf' ?",
            choice1: "Jiraiya Sensei",
            choice2: "Kakashi Hatake",
            choice3: "Minato Namikaze",
            choice4: "Tobirama Senju",
        },
    ];
    const qAnswers = {
        q1: "Mito Uzumaki",
        q2: "Kamui",
        q3: "Bring peace through pain",
        q4: "Yahiko",
        q5: "Shadow Possession",
        q6: "Sasori",
        q7: "Gentle Fist",
        q8: "Kushina",
        q9: "Hidan",
        q10: "Minato Namikaze",
    };
    const [answer, setAnswer] = useState({});
    const [questionCount, setQuestionCount] = useState(1);
    const [hidePage, setHidePage] = useState(false);
    useEffect(() => {console.log(answer);
    }
    , [answer]);

    return (<div className="game-container">

            <div className="video-background">
                <video autoPlay muted loop playsInline>
                    <source
                        src="/bg-video/bg.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
    
        <div className="whole-container">
            <header>
                <h2>Quiz</h2>
                <AudioPage />
            </header>
            <section className="full-container">
                {!hidePage && <WelcomePage hidePage={setHidePage} />}
                
                    <FormPage
                        qPack={allQuestion}
                        qCount={questionCount}
                        setQCount={setQuestionCount}
                        setAns={setAnswer}
                        checkAns={qAnswers}
                        userAns={answer}
                        hide={setHidePage}
                    />
                
            </section>
            <footer>
                <h3>Minato Dhanush</h3>
                <h3>© 2025 Dhanush. All rights reserved.</h3>
            </footer>
        </div>
        </div>
    );
};

export default FrontPage;
