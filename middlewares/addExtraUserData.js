import { ObjectId } from "mongodb";

export default function (req, res, next) {
    req.data =  {
        ...req.data,
        _id: new ObjectId(),
        date: new Date(),
        token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }
    next();
}