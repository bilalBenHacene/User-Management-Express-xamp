import mysql from "mysql";
import connection from "../../connection.js";


var exeQueries = (query, params) => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, result, field) => {
            if (err) return reject(err);
            resolve(Object.values(JSON.parse(JSON.stringify(result))));
        });
    });
}

const view = async (req, res) => {
    const query = "select * from user";

    const result = await exeQueries(query, null);
    res.render('home', { users: result });
};

const find = async (req, res) => {
    const searchText = req.body.search;
    const query = "select * from user where firstName like ? or lastName like ?";

    const result = await exeQueries(query, [`%${searchText}%`, `%${searchText}%`]);
    res.render('home', { users: result });
};

const add = (req, res) => {
    res.render('add', { success: false });
};

const saveNew = async (req, res) => {
    const { firstName, lastName, email, phone, comment } = req.body;
    const query = "INSERT INTO user(firstName,lastName, Email,phone ,comment) VALUES (?,?,?,?,?) ";

    const result = await exeQueries(query, [firstName, lastName, email, phone, comment]);
    res.render('add', { users: result, success: true });
};

const edit = async (req, res) => {
    const id = req.params.id;
    const query = "select * from user where ID = ? ";

    const result = await exeQueries(query, [id]);
    res.render('edit', { users: result, success: false });
};

const saveOld = async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, email, phone, comment } = req.body;
    var query = "UPDATE user set firstName= ?,lastName= ?, Email= ?, phone= ? ,comment=? where ID = ?";

    await exeQueries(query, [firstName, lastName, email, phone, comment, id]);
    query = "select * from user where ID = ? ";
    const result = await exeQueries(query, [id]);
    res.render('edit', { users: result, success: true });
    // res.redirect(`/edit/${id}`);
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    var query = "DELETE FROM  user where ID = ?";

    await exeQueries(query, [id]);
    res.redirect('/');
};
const viewUser = async (req, res) => {
    const id = req.params.id;
    const query = "select * from user where ID = ? ";
    const result = await exeQueries(query, [id]);
    res.render('view', { users: result });
};

export default { view, find, add, saveNew, edit, saveOld, deleteUser, viewUser };