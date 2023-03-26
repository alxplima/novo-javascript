import {Login} from "./login_cfbcursos.js"
import {Cxmsg} from "./cxmsg2.js"

const callback_ok = () => {
    alert("Login efetuado!");
}

const callback_naook = () => {
    const config = {
        cor: "#800",
        tipo: "ok",
        textos: null,
        comando_sn: null,
    }
    
    Cxmsg.mostrar(config, "Login", "Login não efetuado! Usuário ou senha incorretos.");
   //alert("Login não efetuado! Usuário ou senha incorretos.");
}

// chamada sem parametros
//Login.login(null, null, null);

Login.login(callback_ok, callback_naook);







