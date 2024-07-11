require('dotenv').config();
import server from "./source/server";
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`[server on]:running in http://localhost:${PORT}/api`));

server.on('error', (error) => {
    console.log(error);
})