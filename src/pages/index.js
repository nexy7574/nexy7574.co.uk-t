import styles from '@/styles/Home.module.css';

export default function Index() {
    return (
        <>
            <title>nexy7574.co.uk</title>
            <main className={styles.main}>
                <div>
                    <h1>It is <i style={{color: "red"}}>not</i> about the kids.</h1>
                    <h2>Or the bathrooms.</h2>
                    <h3>Or the sports.</h3>
                    <p>It <i style={{color: "lightgreen"}}>is</i> about <span style={{color: "red"}}>control</span>.</p>
                    <p>Transgender people are <span style={{textDecoration: "underline"}}>just the scape goat</span>.</p>
                    <p>Who knows who it&apos;ll be after us.</p>
                    <br/>
                    <p><strong>🏳‍⚧Trans rights are human rights.</strong></p>
                </div>
                <footer >
                    <i style={{fontSize: "13px"}}>
                        <p>Looking for my old page?</p>
                        <a
                            href={"https://web.archive.org/web/20230405105048/https://nexy7574.co.uk/"}
                            target={"_blank"}
                            rel={"noopener"}
                            style={{color: "#1B78E5"}}
                        >
                            web.archive.org
                        </a>
                    </i>
                </footer>
            </main>
        </>
    )
}