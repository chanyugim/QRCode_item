import PageInfo from "./pageInfo";

export default function AddPage({pageName, number, setNumber}) {
    const clickEvent = () => {
        setNumber(number + 1);
    }

    return (
        <div style={{textAlign: 'center'}}>
            <PageInfo name={pageName} num={number}></PageInfo>
            <div id="supplyImage">
                <img src="../public/error.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}></img>
            </div>
            <button className="miniButton" onClick={clickEvent}>+</button>
        </div>
    );
}