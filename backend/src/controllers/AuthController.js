const connection = require('../database/connection');
const crypto     = require('crypto');
const bcrypt     = require('bcryptjs');

/*const  findUser = (email) => {
    console.log(3);
    return connection.raw("SELECT * FROM users WHERE email = ?", [email])
        .then((data) => data.rows[0])
};
  
const checkPassword = (reqPassword, foundUser) => {
    return new Promise((resolve, reject) =>
        bcrypt.compare(reqPassword, foundUser.password_digest, (err, response) => {
            if (err) {
            reject(err)
            }
            else if (response) {
            resolve(response)
            } else {
            reject(new Error('Passwords do not match.'))
            }
        })
    )
};*/

  module.exports = {
    async register(req, res){
        const { email, password } = req.body;
        try{
            // console.log(1);
            // if ( findUser(email).is != null)
            //     return res.status(400).json({ error: 'Usuario ja existente' });

            const users = await connection('users')
            .where('email', email)
            .select('*')
            .first();

            if (users) {
                return res.status(400).json({ error : 'Usuario ja existente'});
            }
            
            //     console.log(2);
            const id = crypto.randomBytes(10).toString('HEX');
            //const hash = bcrypt.hashSync(password, 10);
            const hash = password;
            //this.password = hash;

            await connection('users').insert([{id:id, email:email, password:hash}]);

            return res.send({ id });

        } catch (err){
            return res.status(400).json({error: 'Falha no registxxro'});
        }
    },
    async list(req, res){
        const users = await connection('users').select('*');
        return response.json( users );
    },
    
    async signup(req, res){
        const { email, password } = req.body;
        
        const users = await connection('users')
        .where('email', email)
        .select('*')
        .first();

        if (!users) {
            return res.status(401).json({ error : 'Usario nao encontrado.'});
        }

        if (password !== users.password) {
            return res.status(401).json({ error : 'Senha invalida.'});
        }
 
        return res.status(200).send(users);

    }
};