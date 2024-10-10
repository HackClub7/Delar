import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x49aC2AD1785d9577aF52a4Cd1511DcCC3AC42704";

const DelarContractModule = buildModule("DelarContractModule", (m) => {

    const DelarContract = m.contract("DelarContract", [tokenAddress]);

    return { DelarContract };
});

export default DelarContractModule;
