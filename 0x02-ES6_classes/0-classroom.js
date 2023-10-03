/**
 * Represents a class room.
 */
export default class ClassRoom {
 /**
   * Create a class room.
   * @param {Number} maxStudentsSize - The maximum number.
   * @param {string} lastName - The last name of the person
   * of students in the class.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
