export default InlineResponse20054Videos
/**
 * The InlineResponse20054Videos model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054Videos
 * @version 1.0
 */
declare class InlineResponse20054Videos {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    title: any,
    length: any,
    rating: any,
    shortTitle: any,
    thumbnail: any,
    views: any,
    youTubeId: any
  ): void
  /**
   * Constructs a <code>InlineResponse20054Videos</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054Videos} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054Videos} The populated <code>InlineResponse20054Videos</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20054Videos</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054Videos
   * @param title {String}
   * @param length {Number}
   * @param rating {Number}
   * @param shortTitle {String}
   * @param thumbnail {String}
   * @param views {Number}
   * @param youTubeId {String}
   */
  constructor(
    title: string,
    length: number,
    rating: number,
    shortTitle: string,
    thumbnail: string,
    views: number,
    youTubeId: string
  )
  title: any
  length: any
  rating: any
  shortTitle: any
  thumbnail: any
  views: any
  youTubeId: any
}
//# sourceMappingURL=InlineResponse20054Videos.d.ts.map
