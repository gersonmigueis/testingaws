const app = require('./custom-express');
const port = 3000;

app.listen(port, ()=> console.log(`Server up! - Port ${port}`));