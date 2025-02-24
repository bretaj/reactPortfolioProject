
function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <main>
                <section style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                    <img
                        src="./assets/portrait.jpg"
                        alt="portfolio picture"
                        style={{ borderRadius: '50%', width: '150px', height: '150px', marginRight: '20px' }}
                    />
                    <div>
                        <p>
                            insert bio stuff here
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutMe;