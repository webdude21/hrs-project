package hrs.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


//https://spring.io/guides/gs/accessing-data-mysql/#_create_the_code_entity_code_model
@Entity					// This tells JPA/Hibernate to make a table out of this class
//@Table(name='user')	// Creates a table with the specified name, otherwise the class name is used (todo: confirm the default casing) 
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long uid;

	// @Column(name='role', length = 45, nullable = false)		// when not specified, the default MySQL length will be used, in the current setting 45 
	// @ColumnDefault("'visitor'")								// optional, if not set here can be set in MySQL setup (used when tables are created by Hibernate)
	private String role;
	
	private String ssn;
	
	private String firstName;
	
	private String lastName;
	
	private String country;
	
	private String city;
	
	private String address;
	
	private String phone;
	
	private String email;
	
	private String username;
	
	private String password;
	
	private String comment;

	
	// Ctors (exist only for the sake of JPA) 
	public User() { }
	
	public User(Long uid, String role, String ssn, String firstName, String lastName, String country, String city,
			String address, String phone, String email, String username, String password, String comment) {
		super();
		this.uid = uid;
		this.role = role;
		this.ssn = ssn;
		this.firstName = firstName;
		this.lastName = lastName;
		this.country = country;
		this.city = city;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.username = username;
		this.password = password;
		this.comment = comment;
	}

	
	public Long getUid() {
		return uid;
	}

	public void setUid(Long uid) {
		this.uid = uid;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
	


}


/*

private String role;
private String ssn;
private String firstName;
private String lastName;
private String country;
private String city;
private String address;
private String phone;
private String email;
private String username;
private String password;
private String comment;

role
ssn
first_name
last_name
country
city
address
phone
email
username
password
comment


*/


