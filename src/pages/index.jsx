import styles from '@/styles/index.module.css';
import {useEffect, useState} from "react";


function flexLanguages() {
    alert('I know the following languages: bash/similar, Python 3, HTML+CSS+JS, NextJS, Rust')
}

function renderWordsTrans(words) {
    const CLASSES = [
        styles.trans_blue,
        styles.trans_pink,
        styles.trans_white,
        styles.trans_pink,
        styles.trans_blue
    ];
    let elements = [];
    for(let i=0; i<5; i++) {
        elements.push(
            <span className={CLASSES[i]} key={`${words[i]}-${i}`}>{words[i]}&nbsp;</span>
        )
    }
    return elements
}

function renderWordsLesbian(words) {
    const CLASSES = [
        styles.lesbian_one,
        styles.lesbian_two,
        styles.lesbian_three,
        styles.lesbian_four,
        styles.lesbian_five,
        styles.lesbian_six,
        styles.lesbian_seven,
    ];
    let elements = [];
    for(let i=0; i<7; i++) {
        elements.push(
            <span className={CLASSES[i]} key={`${words[i]}-${i}`}>{words[i]}&nbsp;</span>
        )
    }
    return elements
}

function renderWordsPride(words) {
    const CLASSES = [
        styles.pride_one,
        styles.pride_two,
        styles.pride_three,
        styles.pride_four,
        styles.pride_five,
        styles.pride_six
    ];
    let elements = [];
    for(let i=0; i<4; i++) {
        elements.push(
            <span className={CLASSES[i]} key={`${words[i]}-${i}`}>{words[i]}&nbsp;</span>
        )
    }
    return elements
}

function renderWordsAce(words) {
    const CLASSES = [
        styles.ace_one,
        styles.ace_two,
        styles.ace_three,
        styles.ace_four
    ];
    let elements = [];
    for(let i=0; i<4; i++) {
        elements.push(
            <span className={CLASSES[i]} key={`${words[i]}-${i}`}>{words[i]}&nbsp;</span>
        )
    }
    return elements
}

function renderWords(words) {
    if(words.length === 4) {
        return renderWordsAce(words);
    }
    else if (words.length === 5) {
        return renderWordsTrans(words)
    }
    else if(words.length === 6) {
        return renderWordsPride(words);
    }
    else {
        return renderWordsLesbian(words);
    }
}

function Link(props) {
    let text = props.text;
    let href = props.href;
    let display_text = text || href;
    return <li className={styles.linksItem}><a rel={"noopener"} href={href}>[{display_text}]</a></li>
}

const Div = () => <span className={styles.divider}>|</span>

export default function Home() {
    const [state, setState] = useState([])
    const newPhrase = () => {
        const phrases = [
            "Actions speak louder than words.",
            "Live laugh love, womp womp.",
            "\"Just f*** the hell out\"",
            "\"Can you hack my instagram?\"",
            "\"Sorry! No death for you!\"",
            "Energy companies profit in crisis.",
            "Medical companies profit in crisis.",
            "I'm happy you exist.",
            "Potato potato potato potato",
            "Potato potato potato potato potato",
            "Potato potato potato potato potato potato potato",
        ]
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        const words = renderWords(phrase.split(/\s+/));
        setState(words.map((e) => e));
    }
    useEffect(
        newPhrase,
        []
    )
    return (
        <main className={styles.middleDiv}>
            <title>My Site</title>
            <div style={{"text-align": "center", "margin": "100px auto", "background": '#A00'}}>
                <p>The matrix homeserver running under this domain will be offline during Monday the 7th of August.</p>
                <p>Downtime is expected to start around noon (BST), and will last between an hour, up to 48 hours.</p>
                <p>After the maintinence is completed, the homeserver will be slow and/or unresponsive for up to an hour after functionality
                    is restored, while Synapse catches up with backlog.
                </p>
                <hr/>
                <p>If you need to contact me during this time, you can message me on
                    <Link href={"https://matrix.to/#/@eek4015:matrix.org"} text={"matrix.org"}/>, temporarily.
                </p>
            </div>
            <div style={{width: "100%"}}>
                <div>
                    <h2 onClick={newPhrase} style={{cursor: "default"}}>
                        {state.map((e)=>e)}
                    </h2>
                </div>
            </div>
            <div style={{fontSize: "16px"}}>
                <span>
                    17 | she/her |&nbsp;
                    <span title={"(bash/similar, Python 3, HTML+CSS+JS, NextJS, Rust)"} onClick={flexLanguages} className={styles.fs}>
                        full-stack
                    </span>
                </span>
            </div>
            <ul className={styles.links}>
                <Link href={"https://old.nexy7574.co.uk"} text={"Old Site"}/>
                <Div/>
                <Link href={"https://github.com/EEKIM10/"} text={"GitHub"}/>
                <Div/>
                <Link href={"https://matrix.to/#/@nex:nexy7574.co.uk"} text={"Contact"}/>
                <Div/>
                <Link href={"https://files.nexy7574.co.uk/share/"} text={"File Share"}/>
                <Div/>
                <Link href={"/chat/"} text={"Element Mirror"}/>
                <Div/>
                <Link href={"https://ferdi-is.gay"} text={"ferdi-is.gay"}/>
                <Div/>
                <Link href={"https://matthew-is.gay"} text={"matthew-is.gay"}/>
            </ul>
        </main>
    )
}