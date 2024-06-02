import Web3 from 'web3';
import { chainStayHubAddress } from '../config/polygonAddr';
import { chainStayABI } from '../config/chainStayABI';

const web3 = new Web3(window.ethereum);
const chainStayContract = new web3.eth.Contract(chainStayHubAddress, chainStayABI);

export const onClickExample = async (account) => {
    try {
      await chainStayContract.methods
        .exampleFunction(parameter)
        .send({ from: account[0], value: '100000000000000000' });
    } catch (error) {
      return false;
    }
    return true;
  };