const pessoas = [{
        nome: "renato",
        cpf: "06979145185",
        rua: "rua da flauta",
        sexo: 'M'
    },
    {
        nome: "joao",
        cpf: "06979145181",
        rua: "rua da joca",
        sexo: 'M'
    },
    {
        nome: "joaquina",
        cpf: "06979145182",
        rua: "rua da joaquim",
        sexo: 'F'
    },
    {
        nome: "amanda",
        cpf: "06979145183",
        rua: "rua da amanda",
        sexo: 'F'
    }
]


const map = pessoas.map(Element => {
    if (Element.sexo === 'F') {
        return (Element)
    }
})

map.filter(Element => {
    if (Element !== undefined) {
        console.log(Element)
    }
})