import {
	Entity,
	Column,
	ManyToOne,
	JoinColumn
} from 'typeorm';
import { EmployeeEntity } from './employee.entity';

/**
 * An entity class for user table in the database.
 */
@Entity('employee_document')
export class EmployeeDocEntity {
	/**
	 * PK of the table.
	 */
	@Column({
		name: 'employee_document_id',
		type: 'int',
		comment: 'PK of the table.',
		generated: 'increment',
		primary: true,
		nullable: false,
		unique: true
	})
	employeeDocumentId: number;

	/**
	 * First name of the user.
	 */
	@Column({
		name: 'document_path',
		type: 'varchar',
		length: 100,
		comment: 'Name of the designation.',
		nullable: false
	})
	documentPath: string;

	@ManyToOne(() => EmployeeEntity, (employee) => employee.documents)
	@JoinColumn({
		foreignKeyConstraintName: 'FK_employee_document_employee',
		name: 'employee_id',
		referencedColumnName: 'employeeId'
	})
	employee: EmployeeEntity;
}
