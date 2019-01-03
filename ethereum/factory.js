import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xD10bB1dF0Cbd7FA3CF77E9BB2Abce449a19D9c5d'
);

export default instance;
