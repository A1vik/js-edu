/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const standartHours = 800;
      const overHours = 500;
      const totalHours = knowsProgramming ? standartHours : standartHours + overHours;

      const arr = Object.entries(config);

      const filtered = arr.filter(el => focus === el[0]);

      return Math.ceil(totalHours / filtered[0][1]);
  };
  