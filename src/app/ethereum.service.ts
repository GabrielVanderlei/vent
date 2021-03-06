import { Injectable } from '@angular/core';

@Injectable()
export class EthereumService {
  
  public address:any;
  public contract:any;

  constructor() { 
    this.logIn();
  }

  loadContract (abi:any, contractAddress:any, event){
    var web3:any = window["web3"];
    web3.eth.defaultAccount = web3.eth.accounts[0];
    web3.personal.unlockAccount(web3.eth.defaultAccount, console.log);
    var contractInit = web3.eth.contract(abi);
    var contractInstance = contractInit.at(contractAddress);
    this.contract = contractInstance;
    event(web3.eth.defaultAccount);
  }

  updateAddress(success,error){
    if(success){

      var abi: any;
      var web3:any = window["web3"];

      // Acccounts now exposed
      // Acccounts always exposed
      web3.eth.defaultAccount = web3.eth.accounts[0] 
      this.address = web3.eth.defaultAccount;
    //HelloContract = web3.eth.contract(abi);
    }
  }

  logIn(){
    var ethereum:any = window["ethereum"];
    
   // Modern dapp browsers..
    if (ethereum) {
        try {
            ethereum.enable().then((success, error)=>{this.updateAddress(success, error)});
        } catch (error) {
            // User denied account access...
            console.log(error)
        }
    }
    // Legacy dapp browsers...
    else if (window["web3"]) {
      alert("b");
        
    }
    else{
      alert("a");
    }
  }
}