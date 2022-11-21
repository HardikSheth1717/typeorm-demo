import {
	Entity,
	Column,
	OneToOne
} from 'typeorm';
import { EmployeeEntity } from './employee.entity';

/**
 * An entity class for user table in the database.
 */
@Entity('profile')
export class ProfileEntity {
	/**
	 * PK of the table.
	 */
	@Column({
		name: 'profile_id',
		type: 'int',
		comment: 'PK of the table.',
		generated: 'increment',
		primary: true,
		nullable: false,
		unique: true
	})
	profileId: number;

	/**
	 * First name of the user.
	 */
	@Column({
		name: 'profile_data',
		type: 'varchar',
		length: 100,
		comment: 'Profile data.',
		nullable: false
	})
	profileData: string;

	@OneToOne(() => EmployeeEntity, (employee) => employee.profile)
	employee: EmployeeEntity;
}
