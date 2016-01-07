"use strict";

export default function(av) {
  /**
   * @constructor Address
   * @extends external:AV.Object
   * @memberof model
   */
  return av.Object.extend("Address", {

    initialize() {

      /**
       * Street
       * @name model.Address#street
       * @type {string}
       */
      Object.defineProperty(this, "street", {
        get() {
          return this.get("street");
        },
        set(value) {
          this.set("street", value);
        },
        enumerable: true
      });

      /**
       * Region
       * @name model.Address#region
       * @type {model.Region}
       */
      Object.defineProperty(this, "region", {
        get() {
          return this.get("region");
        },
        set(value) {
          this.set("region", value);
        },
        enumerable: true
      });

      /**
       * Postal code.
       * @name model.Address#postalCode
       * @type {string}
       */
      Object.defineProperty(this, "postalCode", {
        get() {
          return this.get("postalCode");
        },
        set(value) {
          this.set("postalCode", value);
        },
        enumerable: true
      });

      /**
       * Longitude and latitude of the address.
       * @name model.Address#geoLocation
       * @type {external:AV.GeoPoint}
       */
      Object.defineProperty(this, "geoLocation", {
        get() {
          return this.get("geoLocation");
        },
        set(value) {
          this.set("geoLocation", value);
        },
        enumerable: true
      });

      /**
       * Full address.
       * @name model.Address#fullAddress
       * @type {string}
       */
      Object.defineProperty(this, "fullAddress", {
        get() {
          return this.get("fullAddress");
        },
        set(value) {
          this.set("fullAddress", value);
        },
        enumerable: true
      });

      /**
       * Status (active or inactive) of this address.
       * @name model.Address#isActive
       * @type {boolean}
       */
      Object.defineProperty(this, "isActive", {
        get() {
          return this.get("isActive");
        },
        set(value) {
          this.set("isActive", value);
        },
        enumerable: true
      });
    }

  }, {

  });
}