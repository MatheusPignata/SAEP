const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const login = async (req, res) => {
    const professores = await prisma.professor.findMany({
        select:{
            id: true,
            nome: true
        },
        where: {
            email: req.body.email,
            senha: req.body.senha
        }
    });
    return res.json(professores);
}

module.exports = {
    login
};