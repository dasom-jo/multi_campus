import Header from "./Header";
import Main from "./Main";
import { BrowserRouter} from "react-router-dom";

const Layout = ({children}) => {
    return (
        <BrowserRouter>
            <Header />
            <Main>
                {children}
                {/* 메인의 자식요소 */}
            </Main>
        </BrowserRouter>
    );
}

export default Layout;