/**
 * Airline API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CfarItinerary } from './cfarItinerary';
import { MapString } from './mapString';
import { RequestType } from './requestType';

/**
 * A create CFAR offer request
 */
export interface CreateCfarOfferRequest { 
    /**
     * The partner's unique identifier provided by Hopper
     */
    partnerId?: string;
    itinerary: Array<CfarItinerary>;
    requestType: RequestType;
    bookingDateTime?: Date;
    extAttributes: MapString;
}