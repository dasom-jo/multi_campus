const Header = () => {
    return (
        <header>
            <h1>
                <a href="/">리액트</a>
            </h1>
        </header>
    );
}

const Navi = () => {
    const home = 'Home'
    const menuList = [
        {name: "홈", link: "/"},
        {name: "만들기", link: "/creat"},
        {name: "고치기", link: "/update"}
    ]
    return (
        <nav>
            {
                menuList.map((menu) => {
                    return <div>
                        <a href="menu.link">{menu.name}</a>
                    </div>
                })
            }
            {/* <div>
                <a href="/">home</a>
            </div>
            <div>
                <a href="/create">create</a>
            </div>
            <div>
                <a href="/update">update</a>
            </div> */}
        </nav>
    );
}

const Article = () => {
    return (
        <article>
            <h2>환영합니다</h2>
        </article>
    );
}

export { Header, Navi, Article};

// export default Navi;

// export default Header;