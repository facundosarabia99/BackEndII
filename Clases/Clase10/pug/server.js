app.set('views', './views');
//se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');

app.get('/hello', (req, res) => {
    res.render('hello.pug', {mensaje: 'Usando pug JS en express'});
});

app.get('/urlparam',(req, res) => {
    res.render(req.query);
});