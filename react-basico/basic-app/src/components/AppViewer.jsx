import styles from './AppViewer.module.css'
//Camada de Compilação de Serviços
const AppViewer = () => {
  //Retorno no display
  const professores = [
    { id: 1, nome: "José Armando Vargas", idade: 42, formacao: "Engenharia da computação", titulacao: "Latu-Senso" },
    { id: 2, nome: "Maria da Silva", idade: 28, formacao: "Ciência da Computação", titulacao: "Bacharelado" },
    { id: 3, nome: "Carlos Souza", idade: 35, formacao: "Engenharia Elétrica", titulacao: "Mestrado" },
    { id: 4, nome: "Fernanda Garcia", idade: 30, formacao: "Designer Gráfico", titulacao: "Pós-graduação" },
    { id: 5, nome: "Roberto Oliveira", idade: 45, formacao: "Engenharia de Software", titulacao: "Doutorado" },
    { id: 6, nome: "Camila Rodriguez", idade: 26, formacao: "Ciência da Computação", titulacao: "Bacharelado" },
    { id: 7, nome: "Lucas Mendes", idade: 31, formacao: "Engenheiro Mecânico", titulacao: "Mestrado" },
    { id: 8, nome: "Ana Santos", idade: 29, formacao: "Editora de Vídeo", titulacao: "Licenciatura" },
    { id: 9, nome: "Pedro Gómez", idade: 33, formacao: "Desenvolvedor de Software", titulacao: "Mestrado" },
  ]

  return (
    <>
      <h2>Lista de Professores</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Formação</th>
          <th>Titulação</th>
        </tr>
        {
          professores.map((professor) => {
            return (
              <tr className={professor.id % 2 ==1 ? styles.linhaCinza : null} key={professor.id}>
                <td>{professor.id}</td>
                <td>{professor.nome}</td>
                <td>{professor.idade}</td>
                <td>{professor.formacao}</td>
                <td className={professor.titulacao == "Mestrado" || professor.titulacao == "Doutorado" ?
                styles.superTitulo : styles.normalTitulo}>{professor.titulacao}</td>
              </tr>
            )
          })
        }
      </table>
    </>
  )
}

export default AppViewer