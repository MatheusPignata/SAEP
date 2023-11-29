const express = require('express');

const router = express.Router();

const professor = require('./controllers/Professor');
const turma = require('./controllers/Turma');
const atividade = require('./controllers/Atividade');

router.get('/', (req, res) => { return res.json("API saep respondendo") });

router.post('/professores', professor.login);

router.post('/turmas', turma.create);
router.get('/turmas/:professorId', turma.read);
router.put('/turmas', turma.update);
router.delete('/turmas/:id', turma.del);

router.post('/atividades', atividade.create);

module.exports = router;