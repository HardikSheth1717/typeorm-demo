import {
	Entity,
	Column,
	ManyToMany
} from 'typeorm';
import { EmployeeEntity } from './employee.entity';

/**
 * An entity class for user table in the database.
 */
@Entity('team')
export class TeamEntity {
	/**
	 * PK of the table.
	 */
	@Column({
		name: 'team_id',
		type: 'int',
		comment: 'PK of the table.',
		generated: 'increment',
		primary: true,
		nullable: false,
		unique: true
	})
	teamId: number;

	/**
	 * First name of the user.
	 */
	@Column({
		name: 'team_name',
		type: 'varchar',
		length: 100,
		comment: 'Name of the designation.',
		nullable: false
	})
	teamName: string;

	@ManyToMany(() => EmployeeEntity, (employee) => employee.teams)
	employees: EmployeeEntity[];
}
