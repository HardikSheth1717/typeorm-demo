import { MigrationInterface, QueryRunner } from "typeorm";

export class test1669027242097 implements MigrationInterface {
    name = 'test1669027242097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`employee_document\` (\`employee_document_id\` int NOT NULL AUTO_INCREMENT COMMENT 'PK of the table.', \`document_path\` varchar(100) NOT NULL COMMENT 'Name of the designation.', \`employee_id\` int NULL COMMENT 'PK of the table.', UNIQUE INDEX \`IDX_fef133cd65efbca4f57faea6d2\` (\`employee_document_id\`), PRIMARY KEY (\`employee_document_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`profile\` (\`profile_id\` int NOT NULL AUTO_INCREMENT COMMENT 'PK of the table.', \`profile_data\` varchar(100) NOT NULL COMMENT 'Profile data.', UNIQUE INDEX \`IDX_b0465dda30314a8786db3354a6\` (\`profile_id\`), PRIMARY KEY (\`profile_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`team\` (\`team_id\` int NOT NULL AUTO_INCREMENT COMMENT 'PK of the table.', \`team_name\` varchar(100) NOT NULL COMMENT 'Name of the designation.', UNIQUE INDEX \`IDX_a35a345d4436b82adf6bb76f3c\` (\`team_id\`), PRIMARY KEY (\`team_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee\` (\`employee_id\` int NOT NULL AUTO_INCREMENT COMMENT 'PK of the table.', \`firstname\` varchar(100) NOT NULL COMMENT 'First name of the user.', \`lastname\` varchar(100) NOT NULL COMMENT 'Last name of the user.', \`gender\` varchar(20) NOT NULL COMMENT 'Gender of the user.', \`email\` varchar(200) NOT NULL COMMENT 'Email address of the user.', \`profileimage\` varchar(500) NULL COMMENT 'Profile image path.', \`profile_id\` int NULL COMMENT 'PK of the table.', UNIQUE INDEX \`IDX_f9d306b968b54923539b3936b0\` (\`employee_id\`), UNIQUE INDEX \`IDX_0fb71515b22c2f7ded62fcd84c\` (\`gender\`), UNIQUE INDEX \`IDX_817d1d427138772d47eca04885\` (\`email\`), UNIQUE INDEX \`REL_ff6fbb46f0a78351950c41a5e6\` (\`profile_id\`), PRIMARY KEY (\`employee_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee_team\` (\`employee_id\` int NOT NULL, \`team_id\` int NOT NULL, INDEX \`IDX_64a5075eb2fd6ad9c27def0f14\` (\`employee_id\`), INDEX \`IDX_62eacb61fc10e8d49feae805b0\` (\`team_id\`), PRIMARY KEY (\`employee_id\`, \`team_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`employee_document\` ADD CONSTRAINT \`FK_employee_document_employee\` FOREIGN KEY (\`employee_id\`) REFERENCES \`employee\`(\`employee_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_employee_profile\` FOREIGN KEY (\`profile_id\`) REFERENCES \`profile\`(\`profile_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_team\` ADD CONSTRAINT \`FK_employee_team_employee\` FOREIGN KEY (\`employee_id\`) REFERENCES \`employee\`(\`employee_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`employee_team\` ADD CONSTRAINT \`FK_employee_team_team\` FOREIGN KEY (\`team_id\`) REFERENCES \`team\`(\`team_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee_team\` DROP FOREIGN KEY \`FK_employee_team_team\``);
        await queryRunner.query(`ALTER TABLE \`employee_team\` DROP FOREIGN KEY \`FK_employee_team_employee\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_employee_profile\``);
        await queryRunner.query(`ALTER TABLE \`employee_document\` DROP FOREIGN KEY \`FK_employee_document_employee\``);
        await queryRunner.query(`DROP INDEX \`IDX_62eacb61fc10e8d49feae805b0\` ON \`employee_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_64a5075eb2fd6ad9c27def0f14\` ON \`employee_team\``);
        await queryRunner.query(`DROP TABLE \`employee_team\``);
        await queryRunner.query(`DROP INDEX \`REL_ff6fbb46f0a78351950c41a5e6\` ON \`employee\``);
        await queryRunner.query(`DROP INDEX \`IDX_817d1d427138772d47eca04885\` ON \`employee\``);
        await queryRunner.query(`DROP INDEX \`IDX_0fb71515b22c2f7ded62fcd84c\` ON \`employee\``);
        await queryRunner.query(`DROP INDEX \`IDX_f9d306b968b54923539b3936b0\` ON \`employee\``);
        await queryRunner.query(`DROP TABLE \`employee\``);
        await queryRunner.query(`DROP INDEX \`IDX_a35a345d4436b82adf6bb76f3c\` ON \`team\``);
        await queryRunner.query(`DROP TABLE \`team\``);
        await queryRunner.query(`DROP INDEX \`IDX_b0465dda30314a8786db3354a6\` ON \`profile\``);
        await queryRunner.query(`DROP TABLE \`profile\``);
        await queryRunner.query(`DROP INDEX \`IDX_fef133cd65efbca4f57faea6d2\` ON \`employee_document\``);
        await queryRunner.query(`DROP TABLE \`employee_document\``);
    }

}
