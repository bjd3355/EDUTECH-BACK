import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, Role } from './modules/users/users.entity'; // Assurez-vous que le chemin est correct

// Configuration de la connexion à la base de données
const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'edutech_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Active la synchro des tables (à désactiver en production)
});

async function seedAdmin() {
  try {
    console.log('🔄 Connexion à la base de données...');
    await dataSource.initialize();

    const userRepo = dataSource.getRepository(User);

    // Vérifier si un ADMIN existe déjà
    const existingAdmin = await userRepo.findOneBy({ role: Role.ADMIN });
    if (existingAdmin) {
      console.log('✅ Un utilisateur ADMIN existe déjà.');
      process.exit();
    }

    // Hash du mot de passe
    const plainPassword = 'passer';
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Création de l'utilisateur ADMIN
    const adminUser = userRepo.create({
      firstName: 'Fils',
      lastName: 'Kris',
      email: 'filskris@gmail.com',
      password: hashedPassword,
      role: Role.ADMIN, // Utilisation correcte de l'énumération
    });

    await userRepo.save(adminUser);
    console.log('🎉 Utilisateur ADMIN créé avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors de l’insertion de l’ADMIN :', error);
  } finally {
    await dataSource.destroy();
    process.exit();
  }
}

// Exécuter le script
seedAdmin();
// ts-node src/seed-admin.ts
