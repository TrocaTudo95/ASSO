# ASSO

## Tema: INFO.SEC.C00K3R

## Composição do Grupo:
* João Pedro Furriel
* José Pedro Machado
* Pedro Silva

## Motivação
Os padrões de desenho utilizados neste sistema de pipes em filters e as chamadas assíncronas utilizadas para implementar semáforos de forma a
evitar race conditions foram difíceis de entender e como tal pretendemos aprofundar melhor estes temas em que tivemos maior dificuldade.

## Abordagem
Pretendemos seguir o 4º cenário descrito em [https://github.com/hugoferreira/asso-pipes-and-stuff-v19] de forma a permitir ter vários Publishers
e vários Subscribers. A nível de funcionalidades, queremos focar-nos na funcionalidade de Conversion, Arithmetic/Logic, Text e Hashing/Encryption, podendo cada Publisher invocar estas funcionalidades de forma independente dos restantes. Não queremos apenas ter uma infraestrutura local, mas sim uma que funcione em rede, em que cada host aloje Publisher(s), Broker(s) e Subscriber(s), incluindo assim uma funcionalidade extra de Networking.  
