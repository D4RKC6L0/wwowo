class FilaBanco {
    constructor() {
        this.filaPreferencial = [];
        this.filaNormal = [];
        this.ultimoChamado = null;
    }

    adicionarUsuario(tipo, senha) {
        if (tipo === "preferencial") {
            this.filaPreferencial.push(senha);
        } else if (tipo === "normal") {
            this.filaNormal.push(senha);
        }
    }

    chamarUsuario() {
        if (this.ultimoChamado === "preferencial") {
            // Se o último chamado foi preferencial, chama normal se houver
            if (this.filaNormal.length > 0) {
                this.ultimoChamado = "normal";
                return this.filaNormal.shift(); // Chama um usuário normal
            }
        }

        // Se não houver normal ou último chamado foi normal
        if (this.filaPreferencial.length > 0) {
            this.ultimoChamado = "preferencial";
            return this.filaPreferencial.shift(); // Chama um usuário preferencial
        } else if (this.filaNormal.length > 0) {
            this.ultimoChamado = "normal";
            return this.filaNormal.shift(); // Chama um usuário normal
        }

        return null; // Não há usuários na fila
    }

    verificarFilas() {
        return {
            preferencial: this.filaPreferencial.length,
            normal: this.filaNormal.length
        };
    }
}

// Exemplo de uso
const sistemaBanco = new FilaBanco();

// Adicionando usuários
sistemaBanco.adicionarUsuario("preferencial", "senha1");
sistemaBanco.adicionarUsuario("normal", "senha2");
sistemaBanco.adicionarUsuario("normal", "senha3");
sistemaBanco.adicionarUsuario("preferencial", "senha4");

// Chamando usuários
console.log(sistemaBanco.chamarUsuario()); // Chama preferencial: senha1
console.log(sistemaBanco.chamarUsuario()); // Chama normal: senha2
console.log(sistemaBanco.chamarUsuario()); // Chama normal: senha3
console.log(sistemaBanco.chamarUsuario()); // Chama preferencial: senha4
console.log(sistemaBanco.chamarUsuario()); // null (sem usuários)
