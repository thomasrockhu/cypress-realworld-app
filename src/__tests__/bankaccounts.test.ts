import faker from "faker";
import {
  getBankAccountById,
  getBankAccountsByUserId,
  getRandomUser,
  seedDatabase,
  createBankAccountForUser,
  removeBankAccountById,
} from "../../backend/database";
import { User } from "../../src/models/user";
import { BankAccount } from "../../src/models/bankaccount";
describe("BankAccounts", () => {
  beforeEach(() => {
    seedDatabase();
  });

  it("should retrieve a list of bank accounts for a user", () => {
    const userToLookup: User = getRandomUser();

    const result = getBankAccountsByUserId(userToLookup.id);
    expect(result[0].userId).toBe(userToLookup.id);
  });

  it("should retrieve a bank accounts by id", () => {
    const userToLookup: User = getRandomUser();

    const accounts = getBankAccountsByUserId(userToLookup.id);
    const bankAccountId = accounts[0].id;

    const account = getBankAccountById(bankAccountId);

    expect(account.id).toEqual(bankAccountId);
  });
});
