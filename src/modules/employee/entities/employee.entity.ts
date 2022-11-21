import {
	Entity,
	Column,
	OneToOne,
	JoinColumn,
	OneToMany,
	ManyToMany,
	JoinTable
} from 'typeorm';
import { EmployeeDocEntity } from './employeedoc.entity';
import { ProfileEntity } from './profile.entity';
import { TeamEntity } from './team.entity';

/**
 * An entity class for user table in the database.
 */
@Entity('employee')
export class EmployeeEntity {
	/**
	 * PK of the table.
	 */
	@Column({
		name: 'employee_id',
		type: 'int',
		comment: 'PK of the table.',
		generated: 'increment',
		primary: true,
		nullable: false,
		unique: true
	})
	employeeId: number;

	/**
	 * First name of the user.
	 */
	@Column({
		name: 'firstname',
		type: 'varchar',
		length: 100,
		comment: 'First name of the user.',
		nullable: false
	})
	firstName: string;

	/**
	 * Last name of the user.
	 */
	@Column({
		name: 'lastname',
		type: 'varchar',
		length: 100,
		comment: 'Last name of the user.',
		nullable: false
	})
	lastName: string;

	/**
	 * Username of the user.
	 */
	@Column({
		name: 'gender',
		type: 'varchar',
		length: 20,
		comment: 'Gender of the user.',
		nullable: false,
		unique: true
	})
	gender: string;

	/**
	 * Email address of the user.
	 */
	@Column({
		name: 'email',
		type: 'varchar',
		length: 200,
		comment: 'Email address of the user.',
		nullable: false,
		unique: true
	})
	email: string;

	/**
	 * Profile image path.
	 */
	@Column({
		name: 'profileimage',
		type: 'varchar',
		length: 500,
		comment: 'Profile image path.',
		nullable: true
	})
	profileImage: string;

	@OneToOne(() => ProfileEntity, (profile) => profile.employee)
	@JoinColumn({
		foreignKeyConstraintName: 'FK_employee_profile',
		name: 'profile_id',
		referencedColumnName: 'profileId'
	})
	profile: ProfileEntity

	@OneToMany(() => EmployeeDocEntity, (document) => document.employee)
	documents: EmployeeDocEntity[];

	@ManyToMany(() => TeamEntity, (team) => team.employees)
	@JoinTable({
		inverseJoinColumn: {
			foreignKeyConstraintName: 'FK_employee_team_team',
			name: 'team_id',
			referencedColumnName: 'teamId'
		},
		joinColumn: {
			foreignKeyConstraintName: 'FK_employee_team_employee',
			name: 'employee_id',
			referencedColumnName: 'employeeId'
		},
		name: 'employee_team'
	})
	teams: TeamEntity[];
}
