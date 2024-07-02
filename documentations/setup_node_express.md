### Configuração do Node.js e Express.js

#### Não está instalado:

1. Atualize o Homebrew:
   ```bash
   brew update
   ```

2. Instale o Node.js:
   ```bash
   brew install node
   ```

3. Verifique onde está instalado o npm:
   ```bash
   which npm
   ```

4. Abra o arquivo `~/.zshrc`:
   ```bash
   nano ~/.zshrc
   ```

5. Cole essa linha no arquivo, substituindo pelo caminho correto:
   ```bash
   export PATH=$PATH:/usr/local/bin
   ```

6. Atualize o shell:
   ```bash
   source ~/.zshrc
   ```

7. Verifique se o npm foi instalado com sucesso:
   ```bash
   npm -v
   ```

#### Configurando o projeto Node:

1. Inicialize o projeto:
   ```bash
   npm init -y
   ```

2. Instale o Express:
   ```bash
   npm install express
   ```

3. Crie o arquivo `index.js`:
   ```bash
   touch index.js
   ```
