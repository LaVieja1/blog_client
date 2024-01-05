const Header = () => {
    return (
        <header
            className="container"
            style={{
                minHeight: '5rem',
            }}
        >
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1
                    className="py-3"
                    style={{ fontSize: 'calc(2rem + 1.5vw)', fontWeight: '900' }}
                >
                    Santi's Blog
                </h1>
                <p>
                    Este en un blog creado como app full-stack, parte del curriculum de The Odin Project
                    para aprender MERN.
                </p>
            </a>
        </header>
    );
}

export default Header;