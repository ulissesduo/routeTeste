const express = require('express');
const app = express();
const path = require('path');


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const projects = [];

// Rota para servir o arquivo HTML
app.get('/', function (req, resp) {
    resp.sendFile(path.join(__dirname, 'teste.html'));
});

app.get('/sobre-empresa', function(req,resp){
    resp.send('página sobre-empresa')
})

app.get('/contato', function(req,resp){
    resp.send('página de contato')
})

app.post('/project', function(req, resp){
    const project = req.body.projectName;
    projects.push(project);
    console.log(projects);
    return resp.send("Você fez o primeiro post da api")
})

app.listen(8080, () => {
    console.log('servidor iniciado na porta 8080: http://localhost:8080');

});