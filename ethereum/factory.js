import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
<<<<<<< HEAD
  '0xDc270Da67743F242e9B027E5246162b404097Ace'
=======
  '0xD10bB1dF0Cbd7FA3CF77E9BB2Abce449a19D9c5d'
>>>>>>> campaign
);

export default instance;
