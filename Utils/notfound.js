const notfound = (res, req) => {
    res.status(404).send("Route not found")
}

module.exports = notfound