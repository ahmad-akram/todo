import Button from "./Button";
function ContainerHeader(props){
    return(
        <div className="containerHeader">
            <div>
                <h2>To-do List</h2>
            </div>
            <div>
                <Button buttonClick={props.buttonClick} formshowed={props.formshowed}/>
            </div>
        </div>
    )
}

export default ContainerHeader;