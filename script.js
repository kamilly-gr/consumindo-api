fetch("http://localhost:3000/alunos").then(response => {
    if(!response.ok){
        alert("Ocorreu um erro")
    }

    return response.json()
}).then(data => {
    const lista = document.getElementById("containerAlunos")

    data.forEach(function(aluno){
        const alunoitem = document.createElement("div")
        alunoitem.innerHTML=
        `
        <h3>${aluno.nome}</h3>
        <p>${aluno.email}</p>
        <br>
        `
        lista.appendChild(alunoitem)
    })
})

fetch("http://localhost:3000/professores").then(response => {
    if(!response.ok){
        alert("Ocorreu um erro")
    }

    return response.json()
}).then(data => {
    const lista = document.getElementById("containerProfessores")

    data.forEach(function(professores){
        const profitem = document.createElement("div")
        profitem.innerHTML=
        `
        <h3>${professores.nome}</h3>
        <p>${professores.disciplina}</p>
        <br>
        `
        lista.appendChild(profitem)
    })
})

