const express = require('express');
const app = express();
const typesRoutes = require('./routes/types');
const conditionDistributionRoutes = require('./routes/conditionRoutes');
const cantonRoutes = require('./routes/cantons');

app.use(express.json());
app.use('/types', typesRoutes);
app.use('/conditions', conditionDistributionRoutes);
app.use('/cantons', cantonRoutes);
app.use('/canton/:type', conditionDistributionRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Bienvenido a la API del censo');
});