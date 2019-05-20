// Não aceita repetição / não é indexado
const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has("Vasco"))
times.delete('Corinthians')
console.log(times.has('Corinthians'))

const nomes = ['Camila', 'Luísa', 'Nathália', 'Camila']
const nomesSet = new Set(nomes)
console.log(nomesSet)