const express = require('express');
const app = express();
const typesRoutes = require('./routes/types');
const conditionDistributionRoutes = require('./routes/conditionRoutes');

app.use(express.json());
app.use('/types', typesRoutes);
app.use('/conditions', conditionDistributionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Bienvenido a la API del censo');
});