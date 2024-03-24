import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Stelle", (m) => {
  const stelle = m.contract("FreelanceContract", ["", "0xD80bf414FA4d5564B4FeF2390CF4C155878A7190", "3", "4"]);

  m.call(stelle, "withdrawCompensation", []);

  return { stelle };
});