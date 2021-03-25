const { PrismaClient } = require("@prisma/client");
const { hashPassword } = require("../utils/password");

const prisma = new PrismaClient();

module.exports = prisma;

async function main() {
  prisma.$use(async (params, next) => {
    if (params.model == "User") {
      if (params.action == "create") {
        params.args.data.password = await await hashPassword(
          params.args.data.password
        );
      }
    }
    return next(params);
  });
}

main();
