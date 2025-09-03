import express from "express";
import { engine } from "express-handlebars";

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

const produtos = [
    {
        id: 1,
        nome: "Os segredos da mente milionária",
        autor: "T. Harv Ecker",
        categoria: "Empreendedorismo"
    },
    {
        id:2,
        nome: "Pai Rico, Pai Pobre",
        autor: "Robert Kyosaki",
        categoria: "Empreendedorismo"
    },
    {
        id:3,
        nome: "Aprendendo JavaScript",
        autor: "Shelley Powers",
        categoria: "Programação"
    },
]

app.get('/produto/:id', (req, res)=> {
    const id = req.params.id;
    const produto = produtos[parseInt(id) - 1];

    res.render('produto', { produto });
});

app.get('/', (req, res) => {
    res.render('home', { produtos });
});

app.listen(3000, () => {
    console.log("App em execução!");
});