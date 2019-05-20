(function($){
     $.fn.temporizador = function(parametros){
        const paramFinais = $.extend({
            mensagem : 'Em breve!',
            horario: '23:59:59',
            data: '03/28/2019'
        }, parametros)
        const diaDezena = $('<span class= "digito">').html('0')
        const diaUnidade = $('<span class= "digito">').html('0')
        const separadorDia = $('<span class="separador">').html('/')


        const horaDezana = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')

        const mensagem = $('<div class="mensagem">').html(paramFinais.mensagem)
        
        /* const anoAlvo = new Date(paramFinais.data)
        const anoAtual = new Date()
        const diferencaAno = (anoAlvo - anoAtual) / (60*60*24)
        console.log(anoAlvo)
        console.log(anoAtual)
        console.log(regex2.exec(diferencaAno)) */
        
        
        $(this).addClass('temporizador')
        $(this).append(diaDezena, diaUnidade).append('Dias').append(separadorDia)
        .append(horaDezana, horaUnidade,separadorHora,
            minutoDezena, minutoUnidade, separadorMinuto,
            segundoDezena, segundoUnidade,mensagem)
            
            const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
            const horarioAlvo = regex.exec(paramFinais.horario)
            
            let temporizador = setInterval(() =>{
            const agora = new Date()
            const alvo = new Date()
            
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const regexAno = new RegExp(/(\d)(\d)/)
            const anoAlvo = new Date(paramFinais.data)
            anoAlvo.setHours(horarioAlvo[1])
            anoAlvo.setMinutes(horarioAlvo[2])
            anoAlvo.setSeconds(horarioAlvo[3])
            const anoAtual = new Date()
            const diferencaAno = anoAlvo - anoAtual 
            
            const diferencaEmMili = alvo.getTime() - agora.getTime()
           if(diferencaEmMili >= 0 && diferencaAno >= 0){
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
                const ano = regexAno.exec((diferencaAno) / (60*60*24))
                horaDezana.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
                diaDezena.html(ano[1])
                diaUnidade.html(ano[2])

            }else{
                clearInterval(temporizador)
            }

        },1000)
        
        return this
     }
})(jQuery)