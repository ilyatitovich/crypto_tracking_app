import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { setInnerVh } from "../../lib/utils";

export default function Root() {
    useEffect(() => {
        setInnerVh();

        window.addEventListener("resize", setInnerVh);

        return () => window.removeEventListener("resize", setInnerVh);
    }, []);
    return (
        <main className="container">
            <Outlet />
        </main>
    );
}
