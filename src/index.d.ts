/**
  * Generate mutation object by modal array.   
  * User can ```...mutationGenerator(['modal'])```   
  * to merge returned mutations in your origin mutation object.
  * @param modalArray Modal could be a string or camelCase string.    
  * Modal will be converted to an mutation with   
  * ``` function CHANGE_CAMEL_CASE(state, { value }) { this.state.camelCase = value }```.
  */
export declare function mutationGenerator(modalArray: Array<string>): object;

/**
  * Generate computed object by modal array.   
  * User can ```...computedGenerator(['modal'])```   
  * to merge returned computed objects in your origin computed object.
  * @param modalArray Modal could be a string or camelCase string.   
  * Modal will be converted to a computed object with   
  * ```{ get() { // return state }, set() { // call mutation method by model value} }```.
  */
export declare function computedGenerator(modalArray: Array<string>): object;

/**
  * Generate methods object by modal array.   
  * User can ```...mapMutations([...methodsGenerator(['modal'])])```
  * to merge returned methods function in your origin methods object.
  * @param modalArray Modal could be a string or camelCase string.   
  * Modal will be converted to an method which will call the mutation method.
  * For exmaple: ``` this.CHANGE_CAMEL_CASE() ```.
  */
export declare function methodsGenerator(modalArray: Array<string>): object;