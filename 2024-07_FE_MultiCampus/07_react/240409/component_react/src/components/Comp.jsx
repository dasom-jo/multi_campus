const Header = () => {
    return ( 
        <header>
            <h1>
                <a href='/'>React</a>
            </h1>
        </header>
    );
};

const Navi = () => {
    const menuList = [
        {name: "홈", link: "/"},
        {name: "만들기", link: "/create"},
        {name: "고치기", link: "/update"}
    ]
    return ( 
        <nav>
            {
                menuList.map((menu)=>{
                    return (
                        <div>
                            <a href={menu.link}>{menu.name}</a>
                        </div>
                    )
                })
            }
        </nav>
    );
}

const Article = () => {
    return ( 
        <article>
            <h2>환영합니다.</h2>
        </article>
    );
}

export { Header, Navi, Article };