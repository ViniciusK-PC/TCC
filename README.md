
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

<h2>6. Testing</h2>
<p>Testing is a formal process that is performed by the testing team with the aim of determining the logical correctness and purposefulness of the tested program. The importance of testing is great because it significantly reduces the losses that software companies have due to errors and failure of software incurred after its delivery to the customer. <b>We have done the entire testing process manually and documented everything in detail.</b></p>

![testing script](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/abb8b25e-89e3-4c1e-a195-fff350d7405f)

<p>The test scripts represent the instructions from which it is clearly seen as a step by step how the testing was performed. They provide full control over testing, so, if some errors or cancellation occurs, testing conditions can be repeated and the system again lead to that error or cancellation. This is necessary to establish the cause of the problem.
As the above image shows, we documented each our test example in terms of test ID, input data, instruction, expected result, actual result, additional comment, component, method and testing technique. Currently, our test script has over 350 manually tested examples.</p>

![errors in testing script](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/507fa099-2039-47ce-a38b-209166a8d5c4)


<p>During the software testing process, we documented each error found in the error report form. As shown in the image above, each error has its own unique error ID and a detailed description of the error containing: date of identifying an error, date of troubleshooting an error, error priority, type of error, file name, testing phase.</p>

<h3>6.1. Ad hoc testing</h3>
<p>The first step in software testing after each new added functionality in our application was ad hoc testing. The ad hoc testing takes place in an unofficial atmosphere. The developer presents the code to the rest of the group and then the discussion occurs. The members of the group ask questions, the developer corresponds to them, together analyze individual implementation aspects that they consider significant and try to find mistakes.
We have applied this method by examining the code after each new added functionality and had long discussions about it and the potential problems that may occur.</p>

<h3>6.2. Component system hierarchy</h3>
<p>The component system hierarchy of the application components is a complete sketch of all components in our application created in Figma design tool. This sketch is very important to us when testing, because it represents an insight into the order of the component testing. The below image represents our component system hierarchy from the bird eye view:</p>

![application component system](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/6d4a009f-746e-4627-a0fd-acf6fc0f15de)

<h3>6.3. Unit testing</h3>
<p>Unit testing for our application includes the process of testing individual functionalities or application components, to ensure each of them work properly independently. The goal of unit testing is to identify and correct errors in the early stages of development, increase the reliability of code and facilitating future application maintenance.</p>

![unit testing stats english](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/94ec4f61-698e-4954-ba35-1336e939864a)

<p>As the image above shows we found a total of 75 errors in unit test of 103 total errors found, which in our testing unit testing had the highest efficiency with 72.8%. During unit testing, we used the black box and the white box method. The techniques we used for testing were:</p>
<p>The black box method:</p>
<ol>
  <li><p>Equivalence partitioning</p></li>
  <li><p>Boundary Value Analysis – BVA</p></li>
</ol>
<p>The white box method:</p>
<ol>
  <li><p>Statement coverage</p></li>
  <li><p>Decision coverage</p></li>
  <li><p>Condition coverage</p></li>
</ol>

<h3>6.4. Integration testing</h3>
<p>In integration testing, we used the approach "Integration from the bottom to top". This is very used approach in integration testing. This method starts from the components of the system organized in the hierarchy on which the main program is located. Testing starts by unit testing all components located at the lowest level in hierarchy. The components are then tested at the next level that calls previously tested components.</p>

![integration testing stats eng](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/4375373b-b67d-4a11-bee4-ff55325c2db7)

<p>As the image above shows we found a total of 28 errors in integration testing of 103 total errors found, which in our testing, integration testing has efficiency with 27.2%.</p>

<h3>6.5. End-to-end testing</h3>
<p>End-to-end testing is the highest, final level of testing. It is checks whether the system, as a whole, acts in accordance with the specification of the requests set by the customer. Since most functional requirements have already been verified at lower levels of testing, now emphasis is on non-functional requirements, such as speed, reliability, efficiency…</p>

<h3>6.6. Error records at a specified time interval</h3>
<p>During testing, we recorded the found mistakes by days. The next diagram helped us know how to know how our testing progresses.</p>

![diagram about erros by days](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/1b99f3f8-d344-48a5-a973-6764b7e3f7bf)

<p>As the image above shows, the number of errors increases day by day, so testing must continue. Throughout 4 days of testing, we managed to find a total of 103 errors.</p>

<h3>6.7. Analysis of errors found</h3>
<p>During testing, we also conducted the error report form that we have already mentioned in the introductory chapter on testing. This document has helped us significantly in order to document all the most common types of mistakes in our application, which shows the image below.</p>

![error frequency](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/d90292b7-579d-4267-a88d-485ee70dc275)

<h2>Singitronic – Key features</h2>
<p>Singitronic is Next.js and Node.js full-stack e-commerce website with a <b>free source code</b>. Our application comes with the fully functional <b>admin panel</b> and it is fully open-source. Our <b>free online store website</b> is completely responsive and manually tested. You can use our e-commerce project as a template or boilerplate for you next project. Our ecommerce shop template and Next.js ecommerce theme is fully customized for all your needs. It is available for <b>free download</b> and can be used as an ecommerce example for all your future projects. </p>
<h3>Is Next.js good for eCommerce?</h3>
<p>Next.js is currently one of the best ways for developing custom eCommerce solutions. It’s benefits include improved performance, SEO-friendliness, easy development and deployment, excellent developer experience, and the ability to handle versatile and scalable projects. By leveraging Next.js, developers can create compelling web applications that deliver an exceptional user experience while maintaining optimal performance.</p>


<h2>Step-by-step video instructions for running the app</h2>

[https://www.youtube.com/watch?v=Ry0aOMws0gE](https://www.youtube.com/watch?v=Ry0aOMws0gE)

<h2>Instructions</h2>
<ol>
  <li><p>To run the app you first need to download and install Node.js and npm on your computer. Here is a link to the tutorial that explains how to install them: <a href="https://www.youtube.com/watch?v=4FAtFwKVhn0" target="_blank">https://www.youtube.com/watch?v=4FAtFwKVhn0</a>. Also here is the link where you can download them: <a href="https://nodejs.org/en" target="_blank">https://nodejs.org/en</a></p></li>
  <li><p>When you install Node.js and npm on your computer you need to download and install MySQL on your computer. Here is another link to the tutorial which explains how you can download and install MySQL on your computer: <a target="_blank" href="https://www.youtube.com/watch?v=BxdSUGBs0gM&t=212s">https://www.youtube.com/watch?v=BxdSUGBs0gM&t=212s</a>. Here is a link where you can download MySQL: <a href="https://dev.mysql.com/downloads/installer/" target="_blank">https://dev.mysql.com/downloads/installer/</a></p></li>
  <li><p>This step is optional, but highly recommended if you don't have a database management app. Because HeidiSQL is beginner-friendly and very easy to use than other database management options. Here is a link to the tutorial which explains how to download and install HeidiSQL: <a href="https://www.youtube.com/watch?v=oJ24MyLeiPs" target="_blank">https://www.youtube.com/watch?v=oJ24MyLeiPs</a> and here is a link where you can download it: <a href="https://www.heidisql.com" target="_blank">https://www.heidisql.com</a></p></li>
  <li><p>When you install all the programs you need on your computer you need to download the project. When you download the project, you need to extract it.</p></li>
  <li><p>After you extract the project you need to open the project folder in your code editor and in the root create a file with the name .env.</p></li>
  <li><p>You need to put the following code in the .env file and instead of username and password put your MySQL username and password:</p></li>
</ol>

```
DATABASE_URL="mysql://username:password@localhost:3306/singitronic_nextjs"
NEXTAUTH_SECRET=12D16C923BA17672F89B18C1DB22A
NEXTAUTH_URL=http://localhost:3000
```

<p>7. After you do it, you need to create another .env file in the server folder and put the same DATABASE_URL you used in the previous .env file:</p>

```
DATABASE_URL="mysql://username:password@localhost:3306/singitronic_nextjs"
```

<p>8. Now you need to open your terminal of choice in the root folder of the project and write:</p>


```
npm install
```

<p>9. Now you need to navigate with the terminal in the server folder and install everything:</p>

```
cd server
npm install
```

<p>10. You will need to run the Prisma migration now. Make sure you are in the server folder and write:</p>

```
npx prisma migrate dev
```

<p>11. Next is to insert demo data. To do it you need to go to the server/utills folder and call insertDemoData.js:</p>

```
cd utills
node insertDemoData.js
```

<p>12. Now you can go back to the server folder and run the backend:</p>

```
cd ..
node app.js
```

<p>13. While your backend is running you need to open another terminal(don't stop the backend). In the second terminal, you need to make sure you are in your root project folder and write the following:</p>

```
npm run dev
```

<p>14. Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> and see it live!</p>


<h2>Project screenshots</h2>

<h3>Home page</h3>

![singitronic home page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/a48c092d-1f19-4bae-a480-0b5862630e1c)

<h3>Shop page</h3>

![singitronic shop page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/1133effb-0511-40c6-aee5-119404c5af34)

<h3>Single product page</h3>

![singitronic single product page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/443ea3e2-4d32-4d15-aa3b-436cbae0eade)

<h3>Register page</h3>

![singitronic register page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/0052cc90-d61a-4a8c-b8d8-02cee1b45d13)

<h3>Login page</h3>

![singitronic logic page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/7a377bb3-330f-43a4-860f-400bf7aa0f97)

<h3>Search page</h3>

![singitronic search page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/384c7f55-16ee-4966-b612-a34f5506af51)

<h3>Wishlist page</h3>

![singitronic wishlist page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/a20568d6-12fb-42e6-a5ef-583f6e79229a)

<h3>Cart page</h3>

![singitronic cart page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/b9d326be-342c-4f6a-af64-34794f6c39eb)

<h3>Checkout page</h3>

![singitronic checkout page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/a458d931-9df2-4e3d-bf3f-702c1a3ba9e9)

<h3>Admin dashboard - All orders page</h3>

![singitronic admin orders page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/498b07f4-422c-46c5-b2e4-ed2a93306b7a)

<h3>Admin dashboard - All products page</h3>

![singitronic admin products page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/e26822ab-6c7e-4474-9161-288a5bb3476f)

<h3>Admin dashboard - All categories page<h3>

![singitronic admin categories page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/9e4a54d7-5bbb-4f1b-bdab-43c1079510e1)

<h3>Admin dashboard - All users page</h3>

![singitronic admin users page](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS/assets/138793624/e14e8f2c-4377-42fd-b89b-d4868cc11b11)
