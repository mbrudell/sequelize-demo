import Member from "../models/member.model.js"

// const Member = db.Member
// const Op = db.Sequelize.Op

export const findAll = (req, res) => {
    const names = req.query.names;
    var condition = names ? { names: { [Op.like]: `%${names}%` } } : null;
    Member.findAll({ where: condition })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving member."
        });
    });                         
};

export const create = (req, res) => {
    // Validate request
    if (!req.body.names) {
      res.status(400).send({
        message: "Names can not be empty!"
      });
      return;
    }
    // Create a Member
    const member = {
        names: req.body.names,
        idno: req.body.idno,
        krapin: req.body.krapin,
        mobileno: req.body.mobileno,
        date_registered: req.body.date_registered,
        email: req.body.email,
        gender: req.body.gender,
        county: req.body.county,
        photo: req.body.photo,
        idcopy: req.body.idcopy,
        krapincopy: req.body.krapincopy,
        agent: req.body.agent
    };
    // Save Member in the database
    Member.create(member)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Member."
        });
      });
  };
  
  export const findOne = (req, res) => {
    const id = req.params.id;
    Member.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Member with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Member with id=" + id
        });
      });
  };

  export const update = (req, res) => {
    const id = req.params.id;
    Member.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Member was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Member with id=${id}. Maybe Tutorial does not exist!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Member with id=" + id
        });
      });
  };
  
  export const deleteMember = (req, res) => {
    const id = req.params.id;
    Member.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Member was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Member with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Member with id=" + id
        });
      });
  };

// export default {create, update, findAll, findOne}
  
