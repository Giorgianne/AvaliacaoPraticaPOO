class Funcionario {
  #salario

  constructor(nome, idFuncional, salario) {
    if (new.target === Funcionario) {
      return new Error("Funcionario é uma classe abstrata e não pode ser instanciada diretamente.")
    }
    this.nome = nome
    this.idFuncional = idFuncional
    this.#salario = salario
  }

  getSalario() {
    return this.#salario
  }

  setSalario(novoSalario) {
    this.#salario = novoSalario
  }

  descreverFuncao() {
    return new Error("Método abstrato. As subclasses devem implementar descreverFuncao.")
  }
}

class Medico extends Funcionario {
  constructor(nome, idFuncional, salario, crm) {
    super(nome, idFuncional, salario)
    this.crm = crm
    this.especialidades = []
  }

  descreverFuncao() {
    return "Responsável por atender pacientes e realizar diagnósticos."
  }

  adicionarEspecialidade(especialidade) {
    this.especialidades.push(especialidade)
  }
}

class Secretaria extends Funcionario {
  constructor(nome, idFuncional, salario, ramal) {
    super(nome, idFuncional, salario)
    this.ramal = ramal
    this.agendas = []
  }

  descreverFuncao() {
    return "Responsável por organizar agendamentos e auxiliar na recepção."
  }

  criarAgendamento(data, descricao, responsavel) {
    const novaAgenda = new Agenda(data, descricao, responsavel)
    this.agendas.push(novaAgenda)
  }
}
