import styles from '@/styles/index.module.css';
import {useEffect, useState} from "react";


function flexLanguages() {
    alert('bash (shell), Python 3, HTML+CSS+JS, NextJS')
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
    return <a className={styles.linksItem} rel={"noopener"} href={href}>[{display_text}]</a>
    // return <li className={styles.linksItem}></li>
}

// const Div = () => <span className={styles.divider}>|</span>
const MY_LINKS = [
    {
        url: "/about",
        text: "About Me"
    },
    {
        url: "/contact",
        text: "Contact Me"
    },
    {
        url: "//web.archive.org/web20230405105048/https://nexy7574.co.uk/",
        text: "Old Site"
    },
    {
        url: "//github.com/nexy7574/",
        text: "GitHub"
    },
    {
        url: "/chat/",
        text: "SchildiChat Mirror"
    },
    {
        url: "//ferdi-is.gay",
        text: "ferdi-is.gay"
    },
    {
        url: "//matthew-is.gay",
        text: "matthew-is.gay"
    },
    {
        url: "//howmuchdoesthesims4cost.lol",
        text: "howmuchdoesthesims4cost.lol"
    },
    {
        url: "//nio-bot.dev",
        text: "nio-bot"
    }
]

export default function Home() {
    const [state, setState] = useState([])
    const newPhrase = () => {
        const phrases = [
            "Live laugh love, womp womp.",
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
        <>
        <main className={styles.middleDiv}>
            <title>My Site</title>
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
                    <span title={"(bash/similar, Python 3, HTML+CSS+JS, NextJS)"} onClick={flexLanguages} className={styles.fs}>
                        full-stack
                    </span>
                </span>
            </div>
            <a href="//status.nexy7574.co.uk" target="_blank" rel="noopener">[Server Status]</a>
            <div className={styles.linksContainer}>
                {
                    MY_LINKS.map((e, i) => <Link key={i} href={e.url} text={e.text}/>)
                }
            </div>
            {/*<div className={styles.notice}>*/}
            {/*    <h2>Uptime notice</h2>*/}
            {/*    <p>I have recently migrated servers and re-configured all of my domains. If something is missing,*/}
            {/*        please contact me on matrix.</p>*/}
            {/*</div>*/}
        </main>
        </>
    )
}