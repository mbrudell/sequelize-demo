import { Module, County } from '../models/sys.model.js'

// modules 

export const fetchModules = (req, res) => {
    Module.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not retrieve modules"
            })
        })
}

export const createModule = (req, res) => {
    if(!req.body.name){
        res.status(500).send({
            message: "Module name cannot be empty"
        })
    }

    const module = {
        name: req.body.name,
        issystem: req.body.issystem,
        active: req.body.active
    }

    Module.create(module)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while creating module"
            })
        })
}

export const getModule = (req, res) => {
    const id = req.params.id
    Member.findByPk(id)
        .then(data => {
            if (data){
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Cannot find Module with id=${id}.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving module with id=" + id
            })
        })
}

export const updateModule = (req, res) => {
    const id = req.params.id
    Module.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Module updated successfully"
            })
        } else {
            res.send({
                message: `Cannot update Module with id=${id}. Maybe module does not exist`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating module with id=" + id
        })
    })
}

// delete module
export const deleteModule = (req, res) => {
    const id = req.params.id
    Module.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Module deleted successfully"
            })
        } else {
            res.send({
                message: `Cannot delete Module with id=${id}. Maybe module does not exist`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete module with id=" + id
        })
    })
}


// counties

// fetch all counties
export const fetchCounties = (req, res) => {
    County.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not fetch counties"
            })
        })
}

// add county
export const createCounty = (req, res) => {
    if(!req.body.county){
        res.status(500).send({
            message: "Name of county cannot be empty"
        })
    }

    const county = {
        county: req.body.county
    }

    County.create(county)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while creating county"
            })
        })
}

// get county 
export const getCounty = (req, res) => {
    const id = req.params.id
    County.findByPk(id)
        .then(data => {
            if(data){
                res.send(data)
            } else {
                res.status(404).send({
                    message: "County does not exist"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving county with id=" + id
            })
        })
}

// update county
export const updateCounty = (req, res) => {
    const id = req.params.id
    County.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: "County updated successfully"
            })
        } else {
            res.send({
                message: "Error updating county"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while updating county"
        })
    })
}

// delete county 
export const deleteCounty = (req, res) => {
    const id = req.params.id
    County.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "County deleted successfully"
            })
        } else { 
            res.send({
                message: "Could not delete county"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error deleting county"
        })
    })
}

