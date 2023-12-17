# GREAD READ - Pagination

### Pagiation React Utility:

Can be found at `Great Read/client/src/components/Books/Books.jsx`

### Pagiation API:

Following is the controller that handles request for pagination of `books` records. The records are also filtered based on the `categories` that are provided in the request body. Also, a dynamic "limit" can be provided for how many books to be fetched at a single time.

Can be found at `Great Read/server/routes/getRoute.js`

```javascript

getRoute.post('/books', async (req, res) => {
    const { offset, limit, categories, searchTerm } = req.body;
    try {
        let offsetNum = parseInt(offset);
        let limitNum = parseInt(limit);
        let query = Book.find();
        let totalCountQuery = Book.countDocuments();
        let topPicks = await TopPicks.findOne().populate({
            path: 'books',
            model: 'Book'
        }).exec();
        if (searchTerm && searchTerm !== '') {
            topPicks.books = topPicks.books.filter((book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
            const searchRegex = new RegExp(searchTerm, 'i');
            query = query.or([{ title: searchRegex }, { author: searchRegex }]);
            totalCountQuery = totalCountQuery.or([{ title: searchRegex }, { author: searchRegex }]);
        }
        if (categories && categories.length > 0) {
            topPicks.books = topPicks.books.filter((book) =>
                categories.some(category => book.categories.includes(category))
            );
            query = query.where('categories').in(categories);
            totalCountQuery = totalCountQuery.where('categories').in(categories);
        }
        query = query.where('_id').nin(topPicks.books.map(book => book._id));
        if (0 <= offsetNum && offsetNum < topPicks.books.length) {        
            limitNum = limitNum - topPicks.books.length;
        } else {
            offsetNum = offsetNum - topPicks.books.length;
        }
        let books = await query
            .skip(offsetNum)
            .limit(limitNum)
            .exec();
        if (offset == 0) {
            books = [ ...topPicks.books, ...books ];
        }
        const totalCount = await totalCountQuery.exec();
        res.json({
            books,
            totalCount,
        });
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

```