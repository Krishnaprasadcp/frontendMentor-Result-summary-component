
const Results =(props)=>{
    return(
        <div className={`cards bg-green-50`}>
            <div className="flex mx-4"><img src={props.props.icon} alt="logo" />
            <p className={`text-${props.props.color}-600 ml-3`}>{props.props.category}</p></div>
            <div className="mr-2">{props.props.score} / 100</div>
        </div>
    );
}
export default Results;

// ${props.props.color}