const data = require(`../../database`);

module.exports = async function(req, res) {
    res.status(200).json(await data.getUsers());
}