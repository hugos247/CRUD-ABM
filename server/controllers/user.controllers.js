const Users = require('../model/user.models');


const createUser =  (req, res) => {
    Users.create( req.body )
    .then( ( result ) => {
        console.log( req.body );
        res.json( result );
    }).catch( ( error ) => {
        console.log( error );
        // res.json(error)
        res.status(400).json(error);
        console.log( error )
    })
}

const getUsers = (req, res ) => {
    Users.find( req.body )
    .then ( ( result ) => {
        res.json ( result );
    })
    .catch ( ( error ) => {
        console.log( error );
    })
}

const deleteUser = (req, res) => {
    Users.deleteOne( {_id: req.params.id} )
    .then ( ( result) => {
        res.json( result );
    })
    .catch ( ( error ) => {
        console.log( error );
    })
}

const getOneUser = ( req, res ) => {
    Users.findById( req.params.id )
    .then ( ( result ) => {
        console.log( result );
        res.json( result );
    })
    .catch( ( error ) => {
        console.log( error );
        res.json( error )
    })
}


module.exports = {
    createUser,
    getUsers,
    deleteUser,
    getOneUser
}