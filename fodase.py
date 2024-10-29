class Banco:
    def __init__(self):
        self.fila_preferencial = []
        self.fila_normal = []
    
    def adicionar_usuario(self, usuario, tipo):
        if tipo == "preferencial":
            self.fila_preferencial.append(usuario)
        elif tipo == "normal":
            self.fila_normal.append(usuario)
    
    def chamar_atendimento(self):
        if self.fila_preferencial:
            return self.fila_preferencial.pop(0)  # Chama um usuário preferencial
        elif self.fila_normal:
            return self.fila_normal.pop(0)  # Chama um usuário normal
        else:
            return "Nenhum usuário na fila."

# Exemplo de uso
banco = Banco()

# Adicionando usuários
banco.adicionar_usuario("Usuário A", "preferencial")
banco.adicionar_usuario("Usuário B", "normal")
banco.adicionar_usuario("Usuário C", "normal")

# Chamando atendimento
print(banco.chamar_atendimento())  # Saída: Usuário A
print(banco.chamar_atendimento())  # Saída: Usuário B
print(banco.chamar_atendimento())  # Saída: Usuário C
print(banco.chamar_atendimento())  # Saída: Nenhum usuário na fila.
