---
title: "DoR - O que fazer antes de iniciar uma tarefa do backlog"
date: "2025-07-19"
tags: ["produto",]
location: "Somewhere, Earth"
---
O **Definition of Ready (DoR)**, se refere a um conjunto de critérios que ajudam a determinar se uma tarefa está suficientemente preparada para que a equipe comece a trabalhar nela.

Imagine como uma receita: antes de começar a cozinhar, você quer ter certeza de que tem todos os ingredientes, sabe os passos envolvidos e tem as ferramentas certas. Da mesma forma, um DoR garante que uma tarefa tenha todas as informações necessárias e seja clara para a equipe entender e concluir de forma eficaz.

Logo, podemos concluir que o principal objetivo de um DoR está em ter mais clareza e evitar bloqueios no desenvolvimento de uma tarefa.

### Como criar um DoR?

Existem inúmeros exemplos de DoR porque cada um é feito e modelado de acordo com a necessidade atual do time em que será implementado, podendo também ser alterado ao longo do tempo. Logo a seguir, há um exemplo feito por mim que pode ser utilizado ou reescrito por qualquer pessoa:

### **Modelo**

**Task**: Aqui devemos inserir um nome que seja sucinto e não tão técnico, pois temos que lembrar que o board não é visto somente por desenvolvedores mas também pessoas de outros escopos, como produto, design etc; 

*Exemplo: Criar a funcionalidade Pagamento de Pix com crédito*

**Objetivo**: Aqui deveremos inserir o objetivo final a ser atingido.

*Exemplo: O cliente deve ser capaz de realizar o Pagamento de Pix com o saldo do limite de crédito*

**Requisitos**: Quais ações específicas precisam ser tomadas? Quais funcionalidades ou recursos estão envolvidos?

Exemplo:

[✅] Desenhar Solução técnica

[  ] Validar Solução técnica com alguém do time

[ ] Ver se há necessidade de validação por parte do time de compliance

[ ] Ver se há necessidade de validação por parte do time de security

[  ] Verificar se há componentes novos a serem inseridos no Design System

[ ] Verificar se há a necessidade de metrificar as ações do usuário (Amplitude)

**Critérios de sucesso**: Como você saberá se a tarefa está completa? Quais são os indicadores de sucesso?

*Exemplo: O cliente deve ser capaz de realizar o Pagamento de Pix com o saldo do limite de crédito. Mediremos isso por meio de logs e eventos na própria lambda.*

**Responsáveis**: Quais os responsáveis pela tarefa?

**Lembre-se**: O DoR é um documento dinâmico e deve ser adaptado às necessidades específicas de cada equipe e projeto. Revise e atualize o DoR periodicamente para garantir sua efetividade e relevância.