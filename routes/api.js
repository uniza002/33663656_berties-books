// Create a new router
const express = require("express")
const router = express.Router()

router.get('/',function(req, res, next){
    res.render('inputbook.ejs')
});

router.get('/books', function (req, res, next) {
    let book = req.query.search;
    let minprice = req.query.minprice;
    let maxprice = req.query.maxprice;
    let sort = req.query.sort;

    // Define initial search query
    sqlquery = "SELECT * FROM books WHERE name LIKE ?";
    book = "%" + book + "%";

    // Add minimum price to SQL query if inputted
    if (minprice && !isNaN(minprice)) {
        sqlquery += " AND price >= " + minprice;
    }

    // Add maximum price to SQL query if inputted
    if (maxprice && !isNaN(maxprice)) {
        sqlquery += " AND price <= " + maxprice;
    }

    // Append the sort type to the SQL query and sort by ascending
    sqlquery += " ORDER BY " + sort + " ASC";
    
    // Execute the sql query
    db.query(sqlquery, book ? [book] : [], (err, result) => {
        // Return results as a JSON object
        if (err) {
            res.json(err)
            next(err)
        } else {
            res.json(result)
        }
    })
})

module.exports = router;