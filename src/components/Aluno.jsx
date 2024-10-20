function Aluno(props) {
    let estudante = props.matriculado
    if (estudante == true) {

        return <h1>Você é aluno!</h1>
    }
    else {
        return <h1>Você não é aluno!</h1>
    }



}

export default Aluno 