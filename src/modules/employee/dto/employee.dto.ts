/**
 * A DTO class for create new user.
 */
export class CreateEmployeeDto {
	/**
	 * PK of the table.
	 */
	employeeId: number;

	/**
	 * First name of the user.
	 */
	firstName: string;

	/**
	 * Last name of the user.
	 */
	lastName: string;

	/**
	 * Username of the user.
	 */
	gender: string;

	/**
	 * Email address of the user.
	 */
	email: string;

	/**
	 * Profile image path.
	 */
	profileImage: string;
}
