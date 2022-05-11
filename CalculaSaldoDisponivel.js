const lista = [
    {
        nome: 'feijao',
        preco: 12,
    },
    {
        nome: 'arroz',
        preco: 11,
    },
    {
        nome: 'macarrao',
        preco: 5,
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({ current});

            return prev - current.preco;
        }, saldoDisponivel);
    }

    console.log(calculaSaldo(saldoDisponivel, lista));
