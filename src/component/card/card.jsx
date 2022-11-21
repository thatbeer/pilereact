

const Cardbox = () => {
    return (
        <div className="container mt-4 gap-y-2 gap-x-1 col-10">
            <div className="row first-row border-b border-black my-3
            d-flex ">
                <div className="col" >No.Pile</div>
                <div className="col" >1.</div>
                <div className="col" >2.</div>
                <div className="col" >3.</div>
                <div className="col" >4.</div>
                <div className="col" >5.</div>
                <div className="col" >6.</div>
                <div className="col" >7.</div>
                <div className="col" >8.</div>
                <div className="col" >9.</div>
                <div className="col" >10.</div>
                <div className="col" >11.</div>
                <div className="col" >updated</div>
            </div>
            {Array.from({ length: 10 }).map((_,index) => (
                <div className="row my-3 border-b border-black">
                    {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="col">Table cell {index}</div>
                ))}
                </div>
            ))}

        

        </div>
    )
};

export default Cardbox;