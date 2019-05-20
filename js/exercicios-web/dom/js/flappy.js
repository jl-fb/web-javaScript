function novoElemento(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

/* Testar se a barreira é a de cima ou baixo */
/* essa função é um método construtor */
function Barreira(reversa = false){
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

/* const b = new Barreira(true)
b.setAltura(300)
document.querySelector('[wm-flappy]').appendChild(b.elemento) 
 */

 /* função pra par de barreiras */
 function ParDeBarreiras(altura, abertura, x){
     this.elemento = novoElemento('div', 'par-de-barreiras')

     this.superior = new Barreira(true)
     this.inferior = new Barreira(false)

     this.elemento.appendChild(this.superior.elemento)
     this.elemento.appendChild(this.inferior.elemento)

     this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
     }

     this.getX  = () => parseInt(this.elemento.style.left.split('px')[0])
     this.setX = x => this.elemento.style.left = `${x}px`
     this.getLargura = () => this.elemento.clientWidth

     this.sortearAbertura()
     this.setX(x)
 }

 /* const b = new ParDeBarreiras(600, 450, 480)
 document.querySelector('[wm-flappy]').appendChild(b.elemento) */

 function Barreiras(altura, largura, abertura, espaco, notificarPonto){
     /* Criar um Array para qeu receba vários pares de barreiras */
     this.pares  = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + (espaco * 2)),
        new ParDeBarreiras(altura, abertura, largura + (espaco * 3))
    ]
    /* definir variavel de qtos pixels as barreiras irão se mover.
    definir função para que o movimento (animação) seja feito */
    const deslocamento = 3
    this.animar = () => { 
        this.pares.forEach(element => { 
            element.setX(element.getX() - deslocamento)

        /* quando par-de-barreiras sair da tela, mandá-lo para o fim e sortear a altura novamente */
            if(element.getX() < -element.getLargura()){
                element.setX(element.getX() + espaco * this.pares.length)
                element.sortearAbertura()
            }
            const meio = largura / 2
            const cruzouOMeio = element.getX() + deslocamento >= meio && element.getX() < meio
            cruzouOMeio && notificarPonto() /* if(cruzouOMeio = true){ notificarPonto() } */

        })
    }
}

function Passaro(alturaJogo){
    let voando = false
    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = "imgs/passaro.png"

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    /* evento q indica que tecla esta precionada */
    window.onkeydown = e => voando = true
    window.onkeyup = function(e){voando = false}

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMax = alturaJogo - this.elemento.clientHeight - 10
        
        if(novoY <=0){
            this.setY(0)
        }else if(novoY >= alturaMax){
            this.setY(alturaMax)
        }else{
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo/2)
}

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = (pontos) => this.elemento.innerHTML = pontos

    this.atualizarPontos(0)
}

function estaoSobrepostos(elementoA, elementoB){
    /* Pegar a area do retangulo do elemento */
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()
    /* elemento.left + elemento.width = lado direito do elemento */
    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

    return horizontal && vertical
}
function colidiu(passaro, barreiras){
    
    let colidiu = false

    barreiras.pares.forEach(par => {
        if(!colidiu){            
            const superior = par.superior.elemento
            const inferior = par.inferior.elemento

            colidiu = estaoSobrepostos(passaro.elemento, superior) 
            || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function FlappyBird(){
    let pontos = 0 

    const areaDoJogo = document.querySelector("[wm-flappy]")
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400, () => {
        progresso.atualizarPontos(++pontos)
    })
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        /* loop do jogo */
        const temporizador = setInterval(()=>{
            barreiras.animar()
            passaro.animar()

            if(colidiu(passaro, barreiras)){
                clearInterval(temporizador)
            }
        }, 20)
    }
}
new FlappyBird().start()
/* const barreiras = new Barreiras(700,1200,200,400)
const passaro = new Passaro(700)
const areaDoJogo = document.querySelector('[wm-flappy]')
areaDoJogo.appendChild(passaro.elemento)
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
    passaro.animar()
},20) */

