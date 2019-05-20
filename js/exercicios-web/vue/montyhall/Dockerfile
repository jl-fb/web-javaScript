FROM node:10.15.3-alpine

# criar pasta para o projeto
RUN mkdir app 

# faz da pasta 'app' o diretório atual de trabalho
WORKDIR /app

# copia os arquivos 'package.json' e 'package-lock.json' (se disponível)
COPY package*.json ./

# instala dependências do projeto
RUN npm install

# copia arquivos e pastas para o diretório atual de trabalho (pasta 'app')
COPY . /app

# compila a aplicação de produção com minificação
RUN npm run build

#Expor porta para o mundo
EXPOSE 8080

# Comando para iniciar o projeto
CMD ["npm", "start"]