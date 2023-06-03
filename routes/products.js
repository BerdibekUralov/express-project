import { Router } from "express";
const router = Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Boom Shop | Express'
  });
});

router.get('/products', (req, res) => {
  res.render('products', {
    title: 'Products | Express',
    isProducts: true
  });
});

router.get('/add', (req, res) => {
  res.render('add', {
    title: 'Add Products | Express',
    isAdd: true
  });
});

export default router