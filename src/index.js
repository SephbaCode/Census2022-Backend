const express = require('express');
const app = express();
const typesRoutes = require('./routes/types');
const conditionDistributionRoutes = require('./routes/conditionRoutes');
const cantonRoutes = require('./routes/cantons');
const occupationRoutes = require('./routes/occupation');
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use('/types', typesRoutes);
app.use('/types/occupation', typesRoutes);
app.use('/conditions', conditionDistributionRoutes);
app.use('/cantons', cantonRoutes);
app.use('/canton/:type', conditionDistributionRoutes);
app.use('/occupation', occupationRoutes);


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Bienvenido a la API del censo');
});