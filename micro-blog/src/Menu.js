const Menu  = () => {
    return ( 
        <nav className="navbar">
            <h1>
                The Micro Blog
            </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#0ca3a8",
                    borderRadius: "8px",
                    fontWeight: "700",
                }}>Create new post</a>
            </div>
        </nav>
    );
}

export default Menu;