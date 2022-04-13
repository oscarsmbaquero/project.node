import express from 'express';


// SERVER
const PORT = 3000;
const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello!');
  });


// Middlewares
app.use(express.json());  
app.use(express.urlencoded({extended: false}));

//server.use('/movies', movieRoutes);

// Error Control 404
app.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
  });
  app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
  });


app.listen(PORT, () => {
  console.log(`Node server listening on port http://localhost:${PORT}`);
});
