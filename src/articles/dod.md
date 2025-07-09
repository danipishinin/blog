---
title: "DoD - A task termina após ir pra produção?"
date: "2025-07-19"
tags: ["produto"]
location: "Somewhere, Earth"
---
No contexto da metodologia Scrum, o **Definition of Done (DoD)**, é crucial para definir os padrões de qualidade que cada item do backlog deve atender antes de ser considerado "feito". Essa padronização garante que o produto final atenda às expectativas dos stakeholders, previne retrabalho desnecessário, aumenta a produtividade da equipe e facilita a comunicação transparente entre todos os envolvidos.

Dentre as principais vantagens de ter um DoD em uma equipe está: 

- **Clareza e Alinhamento**: garantir que todos da equipe estejam na mesma página sobre o que significa ter um item pronto. Evitando assim mal-entendidos, retrabalho e frustrações;

- **Qualidade**: garante que a tarefa esteja no padrão adequado já que a mesma deverá atender alguns critérios para ser considerada pronta.

### Como criar um DoD?

Não existe um modelo certo a ser seguido no DoD pois geralmente os critérios de sucesso da tarefa e combinados são definidos no refinamento da sprint e devem envolver todos do time

Contudo, estarei deixando um exemplo de DoD a seguir:

### **Modelo**

**Task**: O cliente deve ser capaz de realizar o Pagamento de Pix com o saldo do limite de crédito.

** Critérios de Sucesso**:

[✅] Documentação

[ ] Revisão do código

[ ] Testes (unitários, integração, aceitação etc;)

[ ] Compatibilidade com diferentes dispositivos e navegadores

[ ] Testes de usabilidade


**Cenários de testes**: 

[✅] Não é possível efetuar um pagamento à vista de um valor que seja maior que o limite disponível na conta

[ ] Não é possível solicitar aumento de limite em um intervalo menor que 30 dias referente a última solicitação

[ ] Não é possível realizar pagamentos com valores superiores ao limite de transferência diária

[ ] Efetuar um pagamento com limite disponível

**Revisores**: Quantidade mínima: 1

