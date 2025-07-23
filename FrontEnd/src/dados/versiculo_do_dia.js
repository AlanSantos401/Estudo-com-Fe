

import biblia  from "./almeida_rc.json"

function getVersiculoAleatorio(){

if(!Array.isArray(biblia.verses) || biblia.verses.legth === 0){
    console.error("Arquivo da Bíblia está vazio ou com erro.")

    return {
texto: "Erro ao carregarr a Bíblia",
Referencia: "-"
    }
}

const index = Math.floor(Math.random() * biblia.verses.length)
const versiculo = biblia.verses[index]

return {
            texto: versiculo.text, 
            Referencia: ` ${versiculo.book_name} ${versiculo.chapter}:${versiculo.verse}`
        
    }
}

export default getVersiculoAleatorio;