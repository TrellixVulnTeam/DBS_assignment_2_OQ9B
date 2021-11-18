import { Container, PerInfo } from "./PersonElement";
function Person ({name}){
    return (
        <Container>
        <PerInfo>
        <img className="avartar" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkvHnw-e8xkeN27LPJn5JJvw4XbIgOM8OEw&usqp=CAU'/>
        <p> {name} </p>
        </PerInfo>
        </Container>
    );
}

export default Person;