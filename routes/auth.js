import { Router } from "express";
const router = Router()

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Log in | Express'
  });
});

router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register | Express'
  });
});

export default router