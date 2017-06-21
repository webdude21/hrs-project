package hrs;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@SpringBootApplication
//@EnableAutoConfiguration		// *** UNCOMMENT TO TEST WORKABILITY *** 
public class HRSApplication extends SpringBootServletInitializer {

	private static final Logger log = LoggerFactory.getLogger(HRSApplication.class);

	// removecandidate
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(HRSApplication.class);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(HRSApplication.class, args);
	}
	
	// this enables CORS Globally (not working with security implementation)
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/login").allowedOrigins("http://localhost:4200");
//				registry.addMapping("/pub").allowedOrigins("http://localhost:4200");
//				registry.addMapping("/pub/users/all").allowedOrigins("http://localhost:4200");
				
				registry.addMapping("/login").allowedOrigins("*");
				registry.addMapping("/pub").allowedOrigins("*");
				registry.addMapping("/pub/users/all").allowedOrigins("*");
			}
		};
	}
	


}
