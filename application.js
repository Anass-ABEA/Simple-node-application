const express = require('express');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const homeRouter = require("./routes/HomeRouter")
const path = require("path")
const cors = require('cors')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors("*"))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(homeRouter);

app.listen(PORT, () => {
    console.log(`Server running @http://localhost:${PORT}`)
})

app.use("/", express.static(path.join(__dirname, "font")))

app.get('', (req, resp) => {
    resp.sendFile(path.join(__dirname, "font", "index.html"))
})
