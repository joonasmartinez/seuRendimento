## SEU RENDIMENTO FINANCEIRO

Fico feliz que você esteja lendo sobre este projeto! Vou te falar sobre as funções dele, são bem simples!
 
Esta imagem abaixo é o projeto em funcionamento. Observe que foram preenchidos os dados nos campos input e, após pressionado o botão 'Calcular', foi gerado uma lista logo abaixo com diversas informações.
  
  <div align="center">
    <img src="https://user-images.githubusercontent.com/84146200/165825919-82214680-db57-4d41-b096-156189dc1073.png"/>
  </div>
  
## DESCRIÇÃO

Este projeto foi realizado com o intuito de oferecer aos usuários uma ferramenta que mostre uma perspectiva para futuros investimentos que venham a fazer, trazendo informações que possibilite vislumbrar a maravilha dos juros compostos em uma aplicação financeira.

Na imagem abaixo é mostrado alguns campos que serão requisitados para o devido funcionamento do sistema.
- INICIAL : Este campo espera que você informe o valor que você irá iniciar no seu investimento. 
- MENSAL : Aqui você deverá informar quanto irá aportar mensalmente. Caso não pretenda fazer aportes mensais, informe o valor 0 (zero).
- JUROS ANUAL : Diga quanto o investimento que você está de olho oferece de retorno em juros no ano. Obrigatóriamente deverá ser o valor Anual dos juros.
- PERÍODO : Quantos meses você pretende ficar neste investimento? Informe neste campo, obrigatóriamente em meses, também.

##### Olhe a imagem abaixo e continue a leitura.
  
  <div align="center">
    <img src="https://user-images.githubusercontent.com/84146200/165828239-5c78c126-925e-4f7b-94c9-ec9576a29118.png"/>
  </div>

Depois que estes campos estiverem preenchidos por você, aperte no botão verde escrito "Calcular". O sistema dará andamento e será exibida uma tabela logo abaixo mostrando para você as informações geradas sobre seu investimento.
  
  
  <div align="center">
    <img src="https://user-images.githubusercontent.com/84146200/165832816-6fdd6cde-eb62-493e-9fd4-a31805aecf42.png"/>
  </div>
  
Na imagem acima foi gerado uma tabela que partiu de uma simulação com os seguintes dados:
  - Inicial: 500
  - Mensal: 100
  - Juros Anual: 12
  - Período: 12
  
Perceba que no 1º (primeiro) mês na coluna 'Rendimento do mês' há o resultado 'R$0,00'. O que significa que no primeiro mês não houve rendimento. Isso porquê o sistema irá considerar que para que haja efetividade de rendimento, somente acontecerá após passado 01 (um) mês. Ou seja, no aniversário de inicio da aplicação.
  
No 2º (segundo) mês já é possivel perceber nesta mesma coluna que houve rendimento de 'R$5,00'. O que representa 1/12 avos dos juros do investimento. 
  
Na coluna seguinte 'Acumulado' perceba que já é informado o valor do rendimento gerado referente o mês anterior somado ao valor inicial com o aporte mensal informado. O que resulta no valor de 'R$605,00'.
  
Observação: O Rendimento sempre será sobre o acumulado do mês anterior.

A coluna 'Porcentagem de aumento' é referente quanto de aumento seu 'Acumulado' teve desde o inicio.

Já a coluna 'Rendimento total' calcula quanto de rendimento você já gerou até o momento.
  
## Tecnologias utilizadas

Toda a parte visual do site (front-end) foi desenvolvida utilizando o Framework BOOTSTRAP 5.0; Já o (Back-end) foi desenvolvido em JavaScript sob o paradigma Orientado à Objetos.

## Contato

Caso você tenha se interessado neste projeto e esteja com alguma dúvida, manda um email pra mim: mz-martinez@live.com

## Consideração final

Para fins de informação, este projeto foi desenvolvido apenas para aplicação de conhecimento.
