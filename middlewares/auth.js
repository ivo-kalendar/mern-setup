

export default function (req, res, next) {
    console.log("auth: ", console.log("From Router", req.params, req.body))
    // Get token from the Header
    const token = "WDnmmeiof1884"// req.header('x-auth-token');

    // Check if not Token
    if (!token) {
        return res.status(401).json({ msg: 'Missing Token' });
    }

    try {
        // const decoded = jwt.verify(token, jwtSecret);

        // req.id = decoded.id;
        console.log("auth aproved")
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Invalid Token' });
    }
};
