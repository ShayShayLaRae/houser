

module.exports= {
    getHouses(req, res) {
        const db = req.app.get('db')
        db.get_houses()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },
    addHouse(req, res) {
        // console.log('house', req.body)
        const db = req.app.get('db')
        db.add_house(req.body)
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },
    deleteHouse(req, res) {
        const db = req.app.get('db')
        db.delete_house(req.params.id)
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })

    }
}