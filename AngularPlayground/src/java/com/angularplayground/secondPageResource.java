/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
 * @author barke_000
 */
@Path("secondPageResource")
public class secondPageResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of secondPageResource
     */
    public secondPageResource() {
    }

    /**
     * Retrieves representation of an instance of com.angularplayground.secondPageResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces("application/json")
    public String getJson() {
        return "{\"message\": \"this came from secondPageResource.java\"}";
    }

    /**
     * PUT method for updating or creating an instance of secondPageResource
     * @param content representation for the resource
     * @return an HTTP response with content of the updated or created resource.
     */
    @PUT
    @Consumes("application/json")
    public void putJson(String content) {
    }
}
