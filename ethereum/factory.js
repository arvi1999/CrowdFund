import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2E1485d2B9c8686B77e384984F9C98DF5B34471C'
);

export default instance;
