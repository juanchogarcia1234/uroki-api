const pool = require("../pool");

class UserRepo {
  static async find() {
    const { rows } = await pool.query("SELECT * FROM users;");
    //result has additional info
    return rows; // data we care about
  }
}

module.exports = UserRepo;
