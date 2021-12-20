# Decisões de projeto
---
Por "convenção pessoal" e como exigência da vaga, a base do projeto foi feita com React + TypeScript. Nenhuma lib de UI, apenas styled-components. 

Utilizei Storybook para desenvolver os componentes e documentá-los de forma mais intuitiva. Boa parte dos componentes estão preparados para utilizar controls, mas mesmo assim achei melhor criar uma story para cada estado.

Sobre o gerenciamento global de estado, acabei optando pelo ContextAPI invés de uma lib como redux. Isso me causou um certo incômodo quando percebi que precisaria fazer mais chamadas na API - entro nesse assunto mais adiante.

E para fazer requisições à API do openweathermap utilizei axios, um custom hook e uma espécie de "endpoints creators". 

# Contratempos e escalabilidade
---
Quando percebi que precisaria fazer outra chamada na API para buscar o nome da cidade/estado, entendi que meu custom hook (useRequest) não escala muito bem. Como ele obrigatoriamente reage à um estado contendo ```params``` e só atende um endpoint, foi necessário criar outro estado com ```params``` relacionados ao endpoint que busca cidade/estado. 

Isso poderia ser contornado com um *container* para cada *endpoint* (ou para um grupo de endpoints similares). Ou melhor ainda, o combo **redux + sagas**.

# Considerações finais
---
  * Os componentes são **bem** simples, como não tinha uma UI definida (me baseei [nessa aqui](https://miro.medium.com/max/2000/1*3t0TyGikG-6_E3MZkmooSQ.png)), preferi focar na estruturação.
  * Tenho pouca vivência com TypeScript, *talvez* alguns tipos podem estar sendo utilizado de forma engraçada/incoerente. O famoso "funciona, mas poderia ser mais bonito"
  * Comecei o projeto pensando em testes, querendo implementar TDD, mas ainda não me sinto seguro com esse approach. Sei fazer testes e tenho uma certa exp com a testing-library e cypress, mas apenas em componentes que já existem, totalmente contra o TDD...