import express from "express";
import { engine } from "express-handlebars";

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const users = [
        {
            name: "Marcos",
            lastname: "Marques",
            email: "contato@marcosaleixo.com.br"
        },
        {
            name: "John",
            lastname: "Connor",
            email: "contato@marcosaleixo.com.br"
        },
        {
            name: "Sarah",
            lastname: "Connor",
            email: "contato@marcosaleixo.com.br"
        },
    ]

    res.render('home', { users });
});

app.get('/blog', (req, res)=> {
    const posts = [
        {
            title: "Aprender Node.JS",
            category: "Programação",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, dolores expedita.",
            comments: 4
        },
        {
            title: "Aprender PHP",
            category: "Programação",
            body: "Lorem ipsum dolor sit amet consectetur.",
            comments: 7
        },
        {
            title: "Aprender Java",
            category: "Programação",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            comments: 43
        }
    ]

    res.render('blog', { posts });
});

app.listen(3000, () => {
    console.log("App em execução!");
});