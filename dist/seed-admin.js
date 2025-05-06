"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const users_entity_1 = require("./modules/users/users.entity");
const dataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "edutech_db",
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: true,
});
async function seedAdmin() {
    try {
        console.log("🔄 Connexion à la base de données...");
        await dataSource.initialize();
        const userRepo = dataSource.getRepository(users_entity_1.User);
        const existingAdmin = await userRepo.findOneBy({ role: users_entity_1.Role.ADMIN });
        if (existingAdmin) {
            console.log("✅ Un utilisateur ADMIN existe déjà.");
            process.exit();
        }
        const plainPassword = "passer";
        const hashedPassword = await bcrypt.hash(plainPassword, 10);
        const adminUser = userRepo.create({
            nom: "Fils",
            prenom: "Kris",
            email: "filskris@gmail.com",
            password: hashedPassword,
            role: users_entity_1.Role.ADMIN,
        });
        await userRepo.save(adminUser);
        console.log("🎉 Utilisateur ADMIN créé avec succès !");
    }
    catch (error) {
        console.error("❌ Erreur lors de l’insertion de l’ADMIN :", error);
    }
    finally {
        await dataSource.destroy();
        process.exit();
    }
}
seedAdmin();
//# sourceMappingURL=seed-admin.js.map