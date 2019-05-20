//array é objeto em JS

let aprovados = new Array('bia','carlos','ana')
console.log(aprovados)

aprovados = ['bia','carlos','ana']
console.log(aprovados[0])

aprovados[3]='Paulo'
aprovados.push("Abia")
console.log(aprovados.length)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]//não reordena o array

aprovados = ['bia', 'carol','carlos','ana']
aprovados.splice(1, 1)
console.log(aprovados)

aprovados.splice(1, 0, "elemento1", "elemento2")
console.log(aprovados)
