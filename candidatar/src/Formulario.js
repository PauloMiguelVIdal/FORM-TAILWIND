import React, { useState } from "react";

function Formulario(props) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    function mudançaNome(event) {
        let n = event.target.value;
        setNome(n)
    }

    function mudançaEmail(event) {
        let e = event.target.value;
        setEmail(e)
    }

    function addInfomações(event) {
alert("ok, email enviado")
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" value={Text} onChange={mudançaNome}></input>
            <input type="text" placeholder="Seu email" value={Text} onChange={mudançaEmail}></input>
                <button onClick={addInfomações}>enviar</button>
        </form>
    )

}
export default Formulario