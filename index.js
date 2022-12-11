const alunos=prompt("quantidade de alunos: ")
    for(i=1; i<=alunos; i++){
    let nota1 = parseFloat(prompt("Digite a nota do aluno(a): "))
    let nota2 = parseFloat(prompt("Digite a nota do aluno(a): "))
    let nota3 = parseFloat(prompt("Digite a nota do aluno(a): "))
    let nota4 = parseFloat(prompt("Digite a nota do aluno(a): "))
    let media = (nota1+nota2+nota3+nota4)/4
    
    if(media <=5){
        alert(`A média do aluno(a) foi de ${media}. Aluno reprovado.`)
    }if(media <=7){
        alert(`A média do aluno(a) foi de ${media}. Aluno de recuperação.`)
    }if(media>=7){
        alert(`A média do aluno(a) foi de ${media}. Aluno(a) aprovado(a).`)
    }else{
        alert("Dados não recebidos")
    }

}

