const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;
    const atividades = await prisma.atividade.create({
        data: data
    });
    return res.status(201).json(atividades).end();
}

module.exports = {
    create
};