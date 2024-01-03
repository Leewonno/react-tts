import { KeyboardEvent, useEffect, useState } from 'react'
import { getSpeech } from './speech'
import main from './css/main.module.css'

function App() {

    const [text, setText]  = useState<string>("");

    const handleSpeech = ()=>{
        getSpeech(text);
    }

    const handleSpeechEnter = (e:KeyboardEvent<HTMLElement>)=>{
        if(e.key === "Enter"){
            console.log("실행")
            getSpeech(text);
        }
    }

    return (
        <section className={main.section}>
            <div className={main.box}>
                <div className={main.title}>원하는 문장을 입력하세요</div>
                <input className={main.input} value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>handleSpeechEnter(e)}/>
                <div className={main.btn} onClick={handleSpeech}>
                    실행
                </div>
            </div>
            
        </section>
    )
}

export default App
