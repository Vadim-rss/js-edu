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
      let time = 0;
      if(knowsProgramming) {
        time = 800;
      }
      else time = 1300;
      weeks = Math.ceil(time/config[focus]);
      return weeks;
  };
  