
<h1>Loja de Ferramentas Elétricas com Painel Administrativo em Next.js e Node.js</h1> <p><b>Loja de Ferramentas Elétricas com painel administrativo em Next.js e Node.js</b> é uma <b>loja virtual </b> desenvolvida utilizando Next.js, Node.js e MySQL. O aplicativo foi totalmente construído do zero (com design personalizado) e é completamente responsivo. A Eletrotécnica Mauricio é uma loja moderna especializada na venda de diversos tipos de Ferramentas Elétricas. O objetivo do projeto é criar uma aplicação web moderna <b>seguindo as principais etapas da engenharia de software</b>. Criei essa loja online como parte do meu exame universitário em Projeto Integrador em colaboração com <b>Laboratorio dos Mutantes</b> - <a href="https://github.com/ViniciusK-PC" target="_blank">@ViniciusK-PC</a>. Junto com a aplicação, desenvolvemos uma <b>documentação de engenharia de software com 40 páginas</b>. Os principais tópicos dessa documentação estão descritos no repositório. A principal referência para o desenvolvimento da documentação foi as aulas de "Gestão Agil" do professor Pablo, da Universidade Senac Pelotas. Além disso, as aulas ministradas por Bruna e Pablo foram fundamentais para a implementação do aplicativo.</p> <h2>2. Processo de Engenharia de Software</h2> <p>Durante o design e modelagem do software, decidimos utilizar o modelo em cascata (modelo waterfall). Optamos por esse modelo devido à sua simplicidade, facilidade de monitoramento do projeto e aplicação prática. O modelo em cascata é provavelmente o modelo mais antigo documentado. Ele foi publicado pela primeira vez em 1970 e representa um alto nível de abstração. As etapas do modelo são conectadas em forma de cascata, sendo que o próximo nível só é iniciado após a conclusão do nível anterior.</p>

![cascade model photo](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/2c8546ba-b57f-4467-9db9-d09cec46beb2)

<h3>2.1. Definição de marcos</h3> <p>Os marcos representam eventos-chave no projeto que indicam até que data algo deve ser concluído. Nesta etapa, definimos os marcos para cada fase do nosso processo de engenharia de software.</p> 
<h3>2.2. Kanban - Aplicativo de gerenciamento de projetos</h3> 
<p>Utilizamos o aplicativo Kanban para o gerenciamento e acompanhamento do projeto. Trata-se de uma ferramenta gratuita que facilita a colaboração entre os membros da equipe e permite a exportação fácil de relatórios do projeto com apenas um clique.</p>

![plaky image](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/f670fe69-1037-4b8c-a522-047534398e0a)

<h2>3. Análise de Requisitos</h2> 
<h3>3.1. Especificação de requisitos de software</h3> 
<p>Nesta etapa, definimos todos os requisitos funcionais e não funcionais do software relacionados a toda a aplicação. Também identificamos os requisitos que determinam as conexões do sistema com o ambiente e as exigências de desempenho que o sistema deve atender.</p> 
<h3>3.2. Modelagem do sistema com diagrama de caso de uso</h3> 
<p>O diagrama de caso de uso oferece uma descrição detalhada das funcionalidades do sistema em diferentes situações. Ele descreve os passos e os atores envolvidos em cada cenário. Este diagrama é utilizado como base para o design, a implementação e os testes futuros do software.</p>

![use case diagram github](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/dc578826-4031-4b53-b54c-0c8af3e1710e)

<p>A imagem acima representa o nosso <b>diagrama de caso de uso do site de Eletrotecnica</b>. Nela, também definimos os principais cenários de sucesso e os cenários alternativos tanto para administradores quanto para usuários.</p> 
<h2>4. Design do Sistema</h2> 
<p>O design do sistema é a etapa da engenharia de software que transforma conceitos e requisitos em estruturas concretas de software. É um processo estratégico que define a arquitetura, os componentes e as interações de um sistema de software para atender a requisitos funcionais e não funcionais específicos. Nesta etapa, descrevemos o tipo de arquitetura do sistema. Definimos o front-end e o back-end, detalhando suas estruturas dentro da nossa aplicação. Também especificamos as estruturas de dados, a estrutura do banco de dados e os tipos mais importantes utilizados na aplicação.</p>

<h2>5. Implementação do Software</h2>
 <p>A implementação de software é o processo de transformar um design de software em um sistema funcional. É nesta etapa que toda a programação deve começar. Durante a fase de implementação, é essencial cuidar da documentação interna. Essa documentação inclui cabeçalhos e comentários que fornecem informações básicas sobre os componentes e explicações de partes específicas do código. Esses elementos facilitam o gerenciamento do código e ajudam a compreender melhor o que foi feito, contribuindo para um trabalho mais eficiente e para a manutenção de projetos de software.</p>

![products component comments](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/86c22295-64c6-4328-a17a-8f4f0820b8f1)


<h2>6. Testes</h2> 
<p>Os testes são um processo formal realizado pela equipe de teste com o objetivo de verificar a correção lógica e a funcionalidade do programa testado. A importância dos testes é enorme, pois eles reduzem significativamente os prejuízos que empresas de software podem ter devido a erros ou falhas após a entrega do software ao cliente. <b>Realizamos todo o processo de testes manualmente e documentamos tudo em detalhes.</b></p>

![testing script](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/abb8b25e-89e3-4c1e-a195-fff350d7405f)

<p>Os roteiros de teste são instruções que descrevem, passo a passo, como os testes foram realizados. Eles permitem total controle sobre o processo, de forma que, caso algum erro ou falha ocorra, as condições do teste possam ser repetidas para identificar e corrigir a causa do problema. Como mostrado na imagem acima, documentamos cada exemplo de teste em termos de ID do teste, dados de entrada, instruções, resultado esperado, resultado obtido, comentários adicionais, componente, método e técnica de teste. Atualmente, nosso roteiro possui mais de 350 exemplos testados manualmente.</p>

![errors in testing script](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/507fa099-2039-47ce-a38b-209166a8d5c4)

<p>Durante o processo de teste, registramos cada erro encontrado em um formulário de relatório de erros. Como mostrado na imagem acima, cada erro possui um ID único e uma descrição detalhada que inclui: data de identificação do erro, data de correção, prioridade do erro, tipo de erro, nome do arquivo e fase do teste.</p> 
<h3>6.1. Testes ad hoc</h3> 
<p>A primeira etapa de testes após cada nova funcionalidade adicionada foi a realização de testes ad hoc. Esses testes ocorrem em um ambiente informal, onde o desenvolvedor apresenta o código ao restante do grupo e ocorre uma discussão. Os membros fazem perguntas, o desenvolvedor responde e juntos analisam aspectos específicos da implementação, buscando identificar possíveis erros. Adotamos essa abordagem examinando o código após cada funcionalidade nova e discutindo profundamente os problemas potenciais.</p> 

<h3>6.2. Hierarquia do sistema de componentes</h3> 
<p>A hierarquia do sistema de componentes é um esboço completo de todos os componentes da aplicação, criado com a ferramenta Figma. Este esboço é muito útil durante os testes, pois nos dá uma visão clara da ordem em que os componentes devem ser testados. Abaixo está a hierarquia de componentes da nossa aplicação:<p>

![application component system](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/6d4a009f-746e-4627-a0fd-acf6fc0f15de)

<h3>6.3. Testes unitários</h3>
 <p>Os testes unitários focam no teste de funcionalidades individuais ou componentes da aplicação para garantir que cada um funcione corretamente de forma independente. O objetivo é identificar e corrigir erros nas fases iniciais de desenvolvimento, aumentando a confiabilidade do código e facilitando a manutenção futura da aplicação.</p>

<p>Como mostrado na imagem acima, encontramos um total de 75 erros nos testes unitários, de um total de 103 erros encontrados. Isso fez com que os testes unitários tivessem a maior eficiência, com 72,8%. Durante os testes unitários, utilizamos os métodos de caixa preta e caixa branca. As técnicas aplicadas foram:</p> 
<p>Método de caixa preta:</p> 
<ol> 
  <li><p>Partição de equivalência</p></li> 
  <li><p>Análise de Valores-Limite (Boundary Value Analysis – BVA)</p></li> 
</ol> 
<p>Método de caixa branca:</p> 
<ol> 
  <li><p>Cobertura de declarações</p></li> 
  <li><p>Cobertura de decisões</p></li> 
  <li><p>Cobertura de condições</p></li> 
</ol>

<h3>6.4. Teste de integração</h3>
 <p>No teste de integração, utilizamos a abordagem "Integração de baixo para cima". Essa é uma abordagem muito comum em testes de integração. O método começa pelos componentes do sistema organizados em uma hierarquia, onde o programa principal está localizado no nível mais alto. O processo de teste inicia com testes unitários de todos os componentes localizados no nível mais baixo da hierarquia. Em seguida, os componentes são testados no próximo nível, que chama os componentes já testados anteriormente.</p>

![integration testing stats eng](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/4375373b-b67d-4a11-bee4-ff55325c2db7)

<p>Como mostrado na imagem acima, encontramos um total de 28 erros durante os testes de integração, de um total de 103 erros encontrados, o que resultou em uma eficiência de 27,2% para os testes de integração.</p> 

<h3>6.5. Teste de ponta a ponta (End-to-end)</h3>
 <p>O teste de ponta a ponta é o nível mais alto e final do processo de testes. Ele verifica se o sistema, como um todo, funciona de acordo com as especificações e requisitos definidos pelo cliente. Como a maioria dos requisitos funcionais já foi verificada nos níveis inferiores de teste, nesta etapa o foco está nos requisitos não funcionais, como velocidade, confiabilidade e eficiência.</p> 

 <h3>6.6. Registro de erros em intervalos de tempo específicos</h3> 
 <p>Durante os testes, registramos os erros encontrados ao longo dos dias. O diagrama a seguir nos ajudou a acompanhar o progresso dos testes.</p>

![diagram about erros by days](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/1b99f3f8-d344-48a5-a973-6764b7e3f7bf)

<p>Como mostrado na imagem acima, o número de erros aumenta dia após dia, indicando que os testes precisam continuar. Ao longo de 4 dias de testes, conseguimos identificar um total de 103 erros.</p> 
<h3>6.7. Análise dos erros encontrados</h3> 
<p>Durante os testes, também utilizamos um formulário de relatório de erros, já mencionado no capítulo introdutório sobre testes. Esse documento foi de grande ajuda para documentar os tipos mais comuns de erros na nossa aplicação, como mostrado na imagem abaixo.</p>

![error frequency](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/d90292b7-579d-4267-a88d-485ee70dc275)


<h2>Eletrotécnica Mauricio   – Principais características</h2>
 <p>O Eletrotecncica Mauricio é um site de e-commerce desenvolvido em Next.js e Node.js. Nossa aplicação inclui um painel administrativo totalmente funcional e é completamente open-source. O site da loja virtual é totalmente responsivo e foi testado manualmente. Nosso modelo de loja e o tema de e-commerce em Next.js .</p> 
 <h3>O Next.js é bom para e-commerce?</h3>
  <p>O Next.js é, atualmente, uma das melhores ferramentas para desenvolver soluções personalizadas de e-commerce. Seus benefícios incluem desempenho superior, SEO otimizado, facilidade de desenvolvimento e implantação, excelente experiência para desenvolvedores e capacidade de lidar com projetos versáteis e escaláveis. Ao utilizar o Next.js, os desenvolvedores podem criar aplicações web atrativas que oferecem uma experiência excepcional aos usuários, enquanto mantêm o desempenho ideal.</p>

<h2>Instruções</h2> 
<ol> 
<li><p>Para rodar o aplicativo, primeiro você precisa baixar e instalar o Node.js e o npm no seu computador. Aqui está um link para o tutorial que explica como instalá-los: <a href="https://www.youtube.com/watch?v=4FAtFwKVhn0" target="_blank">https://www.youtube.com/watch?v=4FAtFwKVhn0</a>. E aqui está o link onde você pode baixá-los: <a href="https://nodejs.org/en" target="_blank">https://nodejs.org/en</a></p></li> 
<li><p>Depois de instalar o Node.js e o npm no seu computador, você precisa baixar e instalar o MySQL. Aqui está outro tutorial que explica como fazer o download e instalar o MySQL: <a target="_blank" href="https://www.youtube.com/watch?v=BxdSUGBs0gM&t=212s">https://www.youtube.com/watch?v=BxdSUGBs0gM&t=212s</a>. Aqui está o link para baixar o MySQL: <a href="https://dev.mysql.com/downloads/installer/" target="_blank">https://dev.mysql.com/downloads/installer/</a></p></li> 
<li><p>Este passo é opcional, mas altamente recomendado se você não tem um aplicativo de gerenciamento de banco de dados. O **HeidiSQL** é fácil de usar e indicado para iniciantes. Aqui está o link para o tutorial que explica como baixar e instalar o HeidiSQL: <a href="https://www.youtube.com/watch?v=oJ24MyLeiPs" target="_blank">https://www.youtube.com/watch?v=oJ24MyLeiPs</a> e aqui está o link para baixar: <a href="https://www.heidisql.com" target="_blank">https://www.heidisql.com</a></p></li>
 <li><p>Quando você tiver instalado todos os programas necessários no seu computador, precisa baixar o projeto. Após o download, extraia o projeto.</p></li> <li><p>Depois de extrair o projeto, abra a pasta do projeto no seu editor de código e, na raiz da pasta, crie um arquivo com o nome **.env**.</p></li> <li><p>Você precisa colocar o seguinte código no arquivo **.env**, substituindo **username** e **password** pelos dados do seu MySQL:</p></li> </ol>

```
DATABASE_URL="mysql://username:password@localhost:3306/singitronic_nextjs"
NEXTAUTH_SECRET=12D16C923BA17672F89B18C1DB22A
NEXTAUTH_URL=http://localhost:3000
```


<p>7. Depois de fazer isso, você precisa criar outro arquivo **.env** na pasta **server** e colocar o mesmo **DATABASE_URL** que usou no arquivo **.env** anterior:</p>
```
DATABASE_URL="mysql://username:password@localhost:3306/singitronic_nextjs"
```

<p>8. Agora, abra o terminal de sua escolha na pasta raiz do projeto e execute o seguinte comando:</p>

```
npm install
```
<p>9. Agora, navegue até a pasta **server** no terminal e instale todas as dependências:</p>

```
cd server
npm install
```

<p>10. Agora você precisa rodar a migração do Prisma. Certifique-se de estar na pasta **server** e execute o seguinte comando:</p>

```
npx prisma migrate dev
```

<p>11. Em seguida, insira os dados de exemplo. Para fazer isso, vá até a pasta **server/utills** e execute o arquivo **insertDemoData.js**:</p>

```
cd utills
node insertDemoData.js
```

<p>12. Agora você pode voltar para a pasta **server** e rodar o backend:</p>

```
cd ..
node app.js
```

<p>13. Enquanto o seu backend estiver rodando, abra outro terminal (não pare o backend). No segundo terminal, certifique-se de estar na pasta raiz do projeto e execute o seguinte comando:<p>

```
npm run dev
```

<p>14. Abra <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> e veja o site funcionando ao vivo!</p>
