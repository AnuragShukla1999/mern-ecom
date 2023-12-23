import User from "../../models/userModel"


export const userDetails = async (req, res) => {
    try {
        User.findOne({ eamil: req.user.eamil }, async (err, result) => {
            res.send({ alert: 'success', message: 'Successfully Login', data: {
                firstName: result.firstName,
                lastName: result.email,
                email: result.email,
                image: result.image,
                cartItem: result.cartItem,
                _id: result._id,
            } });
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error...!"
        })
    }
};

