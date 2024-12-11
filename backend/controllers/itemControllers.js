app.get('/api/search', async (req, res) => {
    try {
      const query = req.query.query;
      const results = await PhoneModel.find({
        name: { $regex: query, $options: 'i' }  // 'i' makes it case-insensitive
      });
      res.json(results);
    } catch (error) {
      console.error('Error during search:', error);
      res.status(500).send('Server error');
    }
  });
  