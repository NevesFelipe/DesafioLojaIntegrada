Feature: Cupons de Desconto

    Background:
        Given acesso a página do produto
        And clico no botão "Comprar"
        And preencho, calculo e seleciono o "frete"
        | item  | valor    |
        | frete | 88034389 |

    Scenario: Cupons válidos - Aplicação do cupom: FRETEGRATIS
        When insiro o cupom "FRETEGRATIS"
        And clico no botão "Usar cupom"
        Then verifico o valor "do frete"


    Scenario Outline: Cupons válidos - Aplicação do cupom: <cupom>
        When insiro o cupom "<cupom>"
        And clico no botão "Usar cupom"
        Then verifico o valor "total"

        Examples:
            | cupom     | 
            | 10OFF     |
            | 30REAIS   | 
            | AJJFLWBHH |

    Scenario Outline: Cupons inválidos - Aplicação do cupom: <cupom>
        When insiro o cupom "<cupom>"
        And clico no botão "Usar cupom"
        Then verifico a mensagem de erro "<msg_erro>"

        Examples:
            | cupom        | msg_erro             |
            | CUPOMVENCIDO | Cupom expirado       |
            | FELIPEDIAS   | Cupom não encontrado |