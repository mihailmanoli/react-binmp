import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import "./main.css"

export default function Root() {
    return <>
        <NavigationBar />
        <main className="main-container">
            <Outlet />
        </main>
    </>;
}