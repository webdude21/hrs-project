package hrs.controllers;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import hrs.models.Greeting;

@RestController
public class GreetingController {
	
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
	
	@RequestMapping("/") 			           		// bare minimum to bind RESTful URL to class.method()
	public @ResponseBody String greeting() {        
		return "Hello";
	}
	
	// http://localhost:8080/greeting?name=Funky  => { "id": 7, "content": "Hello, Funky!" }
	// all others revert to 'default'			=> { "id": 7, "content": "Hello, World!" }
	@RequestMapping("/greeting") 
	public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }
}
