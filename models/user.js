import sequelize from "../db/sequelize.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:{
            args: [3,20],
            msg: 'Username must be between 3 and 20 characters'
        }}
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail: {
                msg:'Please provide a valid email adress',
                },
                
                is: {
                        args: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                        msg: "Email format is invalid"
        }
    }
,
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isStrongEnough(value){
            const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/ ;
            if (!strongRegex.test(value)){
                throw new Error('Password must include at least 6 characters, an uppercase letter, a lowercase letter, and a special character');

            }
        }
    }}
}});
export default User;