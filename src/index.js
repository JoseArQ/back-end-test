import './config/env.js';
import httpServer from './config/httpServer.js';
import { PORT } from './constants/env.js';

const bootstrap = () => {

    httpServer.listen(
        PORT,
        () => console.log(`server listen on port ${PORT}`)
    );
}

bootstrap();