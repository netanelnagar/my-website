import Header from "./Header";
import Main from "./Main";

export default function Layout() {
    return (
        <div className="h-dvh w-full grid grid-rows-[auto_1fr]">
           <Header/>
           <Main/>
        </div>
    )
}
