require("dotenv").config();

const mongoose = require("mongoose");
const User = require("../src/models/User");

async function main() {
  const email = (process.argv[2] || "").trim().toLowerCase();

  if (!email) {
    console.error("Usage: node scripts/promoteAdmin.js registered-email@example.com");
    process.exitCode = 1;
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from .env");
  }

  await mongoose.connect(process.env.MONGODB_URI);

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error(
      "No account found for that email. Register the account first."
    );
  }

  user.role = "admin";
  await user.save();

  console.log(`Administrator access granted to ${user.email}.`);
}

main()
  .catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
  });
