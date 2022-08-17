const helpDetails = (req, res) => {
    return res.status(200).send({
        message : "Successfully hitting the help api",
        data : { 
            success : true,
            constact : "+91XXXXXX"
        }
    })
}

module.exports = {
    helpDetails
}