import { ethers } from 'ethers';
import Web3 from 'web3';

function WalletUlti() {
    const ConnectMetamask = async () => {
        const isMetaMaskInstalled = () => {
            //Have to check the ethereum binding on the window object to see if it's installed
            const { ethereum } = window as any;
            return Boolean(ethereum && ethereum.isMetaMask);
        };

        try {
            if (!isMetaMaskInstalled()) {
                throw new Error("No MetaMask found");
            }
            // Will open the MetaMask UI
            // You should disable this button while the request is pending!
            const account = await (window as any).ethereum.request({
                method: "wallet_requestPermissions",
                params: [
                    {
                        eth_accounts: {}
                    }
                ]
            });
            return account[0].caveats[0].value;
        } catch (error) {
            console.error(error);
        }
    }

    const DisconnectMetaMask = async () => {
        await (window as any).ethereum.request({
            method: "wallet_requestPermissions",
            params: [
                {
                    eth_accounts: {}
                }
            ]
        });
    }

    const GetBalance = async (web3: Web3, address: string) => {
        try {
            const balance = await web3.eth.getBalance(address); //Will give value in.
            const converttoether = web3.utils.fromWei(balance, 'ether');
            return converttoether;
        } catch (error) {
            console.log(error);
        }
    }

    // const balanceBN = await provider.getBalance("0x088412d6f2Cf6E464E29bc0832e51f45bD90B007");
    // const balance = balanceBN.toString();
    // const network = await provider.getNetwork();
    // const gas = await provider.getGasPrice();
    // const fee = await provider.getFeeData();
    // const esgas = await provider.estimateGas({
    //     // Wrapped ETH address
    //     to: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",

    //     // `function deposit() payable`
    //     data: "0xd0e30db0",

    //     // 1 ether
    //     value: parseEther("1.0")
    // });
    // const checkTrans = await provider.sendTransaction(transaction);
    // const ContractAddr = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'; /* BNB Contract address */
    // const ContractABI = [{ "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "type": "function" }]

    //send type of money base on endpoint currently connecting to then make post api txhash/address/amount
    const SendBaseEndpoint = async (from: string, to: string, amount: string) => {
        try {
            const params = [{
                from: from,
                to: to,
                value: ethers.utils.parseUnits(amount, 9).toHexString(),
            }];
            await ConnectMetamask()
            const { ethereum } = window as any;
            const provider = new ethers.providers.Web3Provider(ethereum);

            // const balance = await provider.getBalance(from);
            // const feeData = await provider.getFeeData();
            // const amountBN = ethers.BigNumber.from(params[0].value);

            // const finale = balance.add(feeData.gasPrice as ethers.BigNumber)


            // if (finale.lt(balance)) {
            //     throw new Error("Your balance is not enough");
            // }

            const transactionResult = await provider.send('eth_sendTransaction', params);
            return transactionResult as string;
        } catch (error) {
            console.log(error);
        }
    }
    return { SendBaseEndpoint, GetBalance, ConnectMetamask, DisconnectMetaMask }
}

export default WalletUlti;