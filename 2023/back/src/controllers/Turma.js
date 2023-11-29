const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const turmas = await prisma.turma.findMany({
        where: {
            professorId: parseInt(req.params.professorId)
        }
    });
    return res.json(turmas);
}

const create = async (req, res) => {
    const data = req.body;
    const turmas = await prisma.turma.create({
        data: data
    });
    return res.status(201).json(turmas).end();
}

const update = async (req, res) => {
    const data = req.body;
    let turma = await prisma.turma.update({
        data: data,
        where: {
            id: parseInt(req.body.id)
        }
    });
    res.status(202).json(turma).end();
}

const del = async (req, res) => {
    try{
        let turma = await prisma.turma.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(turma).end();
    }catch(e){
        res.status(400).json({error: "Turma não pode ser excluida pois possui atividades atribuidas!"}).end();
    }

    
}

module.exports = {
    read,
    create,
    update,
    del
};