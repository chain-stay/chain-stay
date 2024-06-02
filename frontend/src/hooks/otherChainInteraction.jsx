import Web3 from 'web3';
import { ccipSenderAddress } from '../config/sepoliaAddr';
import { senderABI } from '../config/senderABI';

const web3 = new Web3(window.ethereum);
const senderContract = new web3.eth.Contract(ccipSenderAddress, senderABI);

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