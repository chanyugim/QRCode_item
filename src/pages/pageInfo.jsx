export default function PageInfo({name , num}) {
    return (
        <div className="pageHeader">
            <h2 className="titleBar">{name}</h2>
            <p style={{color:'black', fontWeight:'bold'}}>현재 관리중인 물품의 수: {num}개</p>
        </div>
    );
}