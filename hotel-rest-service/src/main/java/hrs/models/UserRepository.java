package hrs.models;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


//This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
//CRUD refers Create, Read, Update, Delete
public interface UserRepository extends CrudRepository<User, Long> {

}



/*
 * // ALSO OPTION:
 * https://spring.io/guides/gs/accessing-data-jpa/#_create_simple_queries
 * 
 * import java.util.List;
 * 
 * public interface CustomerRepository extends CrudRepository<Customer, Long> {
 * 
 * List<Customer> findByLastName(String lastName); }
 * 
 * 
 * 
 * import java.util.List;
 * 
 * import org.springframework.data.repository.PagingAndSortingRepository; import
 * org.springframework.data.repository.query.Param; import
 * org.springframework.data.rest.core.annotation.RepositoryRestResource;
 * 
 * @RepositoryRestResource(collectionResourceRel = "people", path = "people")
 * public interface PersonRepository extends PagingAndSortingRepository<Person,
 * Long> {
 * 
 * List<Person> findByLastName(@Param("name") String name);
 * 
 * }
 * 
 * 
 * 
 */
