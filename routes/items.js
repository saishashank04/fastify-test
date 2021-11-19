const {getItems, getItem , addItem, deleteItem} = require('../controllers/items')

const item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type:'string'}
    }
}

//options for get all items
const getItemsOpts = {
    schema:{
        response:{
            200:{
                type: 'array',
                items: item
            }
        }
    },
    handler: getItems
}

const getItemOpts = {
    schema:{
        response:{
            200: item
        }
    },
    handler: getItem
}

const postItemOpts = {
    schema:{
        body:{
            type: 'object',
            required: ['name'],
            properties:{
                name:{type:'string'}
            }
        },
        response:{
            201: item
        }
    },
    handler: addItem
}

const deleteItemOpts = {
    schema:{
        response:{
            200: {
                type:'object',
                properties:{
                    message: {type: 'string'}
                }
            }
        }
    },
    handler: deleteItem
}

function itemRoutes(fastify,options,done){
    fastify.get('/items', getItemsOpts) 
    
    fastify.get('/items/:id', getItemOpts) 
    
    fastify.post('/items',postItemOpts)

    fastify.delete('/items/:id', deleteItemOpts)

    done()
}

module.exports = itemRoutes