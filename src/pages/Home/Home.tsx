import "./Home.scss";
import Table from "../../components/Table/Table";

export default function Home() {
    return (
        <main className="home">
            <div className="table-container">
                <Table data={new Array(100).fill(1)}/>
            </div>
        </main>
    );
}
