

export default function (req, res, next) {
    // Get token from the Header
    const token = "WDnmmeiof1884"// req.header('x-auth-token');

    // Check if not Token
    if (!token) {
        return res.status(401).json({ msg: 'Missing Token' });
    }

    try {
        // const decoded = jwt.verify(token, jwtSecret);

        // req.id = decoded.id;
        console.log(" [auth] aproved: ", token)
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Invalid Token' });
    }
};
