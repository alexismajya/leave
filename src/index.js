import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const appExp = express();

appExp.use(bodyParser.urlencoded({ extended: true }));
appExp.use(bodyParser.json());
appExp.use(cors());

appExp.get('/', (req, res) => res.send({ Leave_serer: 'welcome to Leave application System' }));

// appExp.use(Route);

const port = process.env.PORT || 4000;
appExp.listen(port, () => console.log(`Server is listening on port: ${port}`));

export default appExp;
