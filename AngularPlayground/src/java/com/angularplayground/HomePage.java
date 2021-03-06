package com.angularplayground;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;

/**
 * REST Web Service
 *
 * @author Tommy B
 */
@Path("HomePage")
public class HomePage {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of HomePage
     */
    public HomePage() {
    }

    /**
     * Retrieves representation of an instance of com.angularplayground.HomePage
     * @return an instance of java.lang.String
     */
    @GET
    @Produces("application/json")
    public String getJson() {
        return "{\"welcomeMessage\": \"Hello Everyone :)\"}";
    }

    /**
     * PUT method for updating or creating an instance of HomePage
     * @param content representation for the resource
     * @return an HTTP response with content of the updated or created resource.
     */
    @PUT
    @Consumes("application/json")
    public void putJson(String content) {
    }
}
