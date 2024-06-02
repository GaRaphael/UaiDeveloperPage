import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from '../main/routes';

// import setupSwagger from './config/config-swagger';
// import scheduledJobs from '../infra/cron/scheduledJobs';

const app = express();
// setupSwagger(app);
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api', routes);
// scheduledJobs();

app.listen(port, () => console.log(`🚀 success!!! server run in port ${port}.`));