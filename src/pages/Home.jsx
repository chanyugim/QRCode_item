import PageInfo from "./pageInfo";

export default function Home({pageName, number}) {
    return (
        <div>
            <PageInfo name={pageName} num={number}></PageInfo>
        </div>
    );
}