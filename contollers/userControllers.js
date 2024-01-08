const { Op } = require('sequelize');
const db = require('../models/index')
const User = db.user;
const addUser = async (req, res) => {

    const { firstName, lastName, email, phoneNo } = req.body;

    // Creating a new user
    const newUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNo: phoneNo,
    }, {
        fields: ['phoneNo', 'lastName', 'email']
    });

    res.status(201).json({
        success: true,
        message: 'User created successfully',
        user: newUser,
    });

}

const updateUser = async (req, res) => {
    const { firstName } = req.body;
    const { fName } = req.params;
    console.log("fist", firstName, "fname", fName);
    try {
        const updatedUser = await User.update(
            { firstName: firstName },
            { where: { firstName: fName } },


        );
        if (updatedUser[0] === 0) {
            return res.status(404).json({
                success: false,
                message: 'User not found.',
            });
        }

        res.status(200).json({
            success: true,
            message: 'User updated successfully.',
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating user.',
            error: error.message,
        });
    }
};

const findUser = async (req, res) => {
    try {
        const nameSearch = req.params.nameSearch;
        const user = await User.findAll({
            attributes: ['firstName', [db.sequelize.fn('COUNT', db.sequelize.col('firstName')), "count"]]
            , where: { firstName: nameSearch },
            group: ['firstName'],
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found.',
            });
        }

        res.status(200).json({
            success: true,
            message: 'User found successfully.',
            user: user,
        });
    } catch (error) {
        console.error('Error finding user:', error);
        res.status(500).json({
            success: false,
            message: 'Error finding user.',
            error: error.message,
        })
    }
}

const findAll = async (req, res) => {
    try {
        const nameSearch = req.params.nameSearch;
        const user = await User.findAll({  attributes: ['email'],
            where: {
                firstName: nameSearch
            }
        });
        res.status(200).json({
            success: true,
            message: 'User found successfully.',
            user: user,
        });
    } catch (error) {
        console.error('Error finding user:', error);
        res.status(500).json({
            success: false,
            message: 'Error finding user.',
            error: error.message,
        })
    }
}
const exinclude = async (req, res) => {
const all = await User.findAll({ attributes:{exclude:['createdAt', 'updatedAt']}
})
return res.status(200).json({"success": all});

}

const operand = async (req, res) => {
    const eq = await User.findAll({ 
where: {
    id:{
        [Op.eq]:2
    }
}
    })
    const gt = await User.findAll({ 
        where: {
            id:{
                [Op.gt]:2
            }
        }
            })

            const like = await User.findAll({ 
                where: {
                    email:{
                        [Op.like]:"%@example.com%"
                    },
                 
                },
                attributes:['email']
                    })
    return res.status(200).json({"eq": eq,"gt": gt, "like": like});
    
    }

module.exports = {exinclude, addUser, updateUser, findUser, findAll ,operand};