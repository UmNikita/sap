function registration(pool, login, password) {
    console.log(`INSERT INTO login, password VALUES ('${login}', ${password})`)
    // pool.query(`INSERT INTO login, password VALUES ('${login}', ${password})`, (err, res) => {
    //     if(err) {
    //         console.log("Ошибка выполнения запроса")
    //     }
    // })
}

async function login(pool, login, password) {
    let data_query = {
        'name': 'Request to the database to get a username and password.',
        'availability_data': null,
        "data": {
            'id': null,
            'login': null,
            'password': null
        }
    }
    const res = await pool.query(`SELECT id, login, password FROM public.user WHERE login='${login}'`)
    if (res.rows.length > 0) {
        data_query.availability_data = true
        data_query.data.id = res.rows[0].id
        data_query.data.login = res.rows[0].login
        data_query.data.password = res.rows[0].password
    }
    else {
        data_query.availability_data = false
    }
    return data_query
}

module.exports = {registration, login};