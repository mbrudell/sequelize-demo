import { Op } from "sequelize"

import { Membership, Module } from "../models/associations.model.js"
import Member from "../models/member.model.js"
import { County } from "../models/sys.model.js"


// all memberships

/**
 * 
 *  all memberships
 *  add a join with members 
 */

export const fetchMemberships = (req, res) => {
    Membership.findAll({ 
        attributes: ['member_ref', 'membershipno', 'date_registered', 'status'],
        // where: { // left outer join
        //     '$sys_module.name$': { [Op.eq] : 'SACCO'}
        // },
        include: [{
            model: Module,
            attributes:[['name', 'module']],
            required: true, // default: true #inner join#
            // where : {  
            //     name : 'SACCO'
            // }
        },
        {
            model: Member,
            attributes:['names', 'idno', 'mobileno', 'gender'],
            include: {
                model: County,
                attributes:[['county', 'countyname']]
            }
        }]
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while fetching memberships"
            })
        })
}

// new membership
export const createMembership = (req, res) => {
    if(!req.body.memberid){
        message: "Cannot create a membership without member details"
    }

    const membership = {
        memberid: req.body.memberid,
        member_ref: req.body.member_ref,
        membershipno: req.body.membershipno,
        moduleid: req.body.moduleid,
        status: req.body.status,
        date_registered: req.body.date_registered
    }

    Membership.create(membership)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while creating membership"
            })
        })
}

/**
 *  TODO:
 *  do i fetch memberships by memberref or membershipid
 *  sahii natumia membershipid
 *  getMembership
 */

export const getMembership = (req, res) => {
    const membershipid = req.params.id
    Membership.findByPk(membershipid)
        .then(date => {
            if(data){
                res.send(data)
            } else {
                res.status(404).send({
                    message: "Membership does not exist"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while fetching membership"
            })
        })
}

// update membership
export const updateMembership = (req, res) => {
    const id = req.params.id
    Membership.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Membership update successfully"
            })
        } else { 
            res.send({
                message: "Membership could not be updated"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while updating membership"
        })
    })
}

// delete membership
export const deleteMembership = (req, res) => {
    const id = req.params.id
    Membership.destroy(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Membership deleted successfully"
            })
        } else {
            res.send({
                message: "Membership could not be deleted"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while deleting membership"
        })
    })
}
