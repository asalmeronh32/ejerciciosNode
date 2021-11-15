const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.get('/convierte/', (req, res) => {
const euros = Number(req.query.euros)
const resultado = euros * 1.2
const cadena = `<h2> En dolares son: ${resultado}</h2>
`
res.send(cadena)
})
app.all('/', (req, res) => {
res.send(`<p>Copia y pega:
<br>localhost:5000/convierte/?euros=100
<br> en la barra de direcciones</p>
<br><br> Cambia elvalor de los euros comprueba su funcionamiento
`)
});

app.listen(5000, () => console.log('Server ready on localhost:5000'))