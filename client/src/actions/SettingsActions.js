import {
  NUMBER_OF_COURSES,
  NUMBER_OF_COURSE_ONE_OPTIONS,
  NUMBER_OF_COURSE_TWO_OPTIONS,
  NUMBER_OF_COURSE_THREE_OPTIONS,
  NUMBER_OF_COURSE_FOUR_OPTIONS,
  NUMBER_OF_COURSE_FIVE_OPTIONS,
  NUMBER_OF_MENUS,
  NUMBER_OF_DRINK_OPTIONS,
  CREATE_ITEM
} from './types';

export const numberOfCourses = (num) => {
  return {
    type: 'NUMBER_OF_COURSES',
    payload: num
  }

}
export const numOfCourseOneOptions = (num) => {
  return {
    type: 'NUMBER_OF_COURSE_ONE_OPTIONS',
    payload: num
  }
}
export const numOfCourseTwoOptions = (num) => {
  return {
    type: 'NUMBER_OF_COURSE_TWO_OPTIONS',
    payload: num
  }
}
export const numOfCourseThreeOptions = (num) => {
  return {
    type: 'NUMBER_OF_COURSE_THREE_OPTIONS',
    payload: num
  }
}
export const numOfCourseFourOptions = (num) => {
  return {
    type: 'NUMBER_OF_COURSE_FOUR_OPTIONS',
    payload: num
  }
}
export const numOfCourseFiveOptions = (num) => {
  return {
    type: 'NUMBER_OF_COURSE_FIVE_OPTIONS',
    payload: num
  }
}

export const numOfMenues = (num) => {
  return {
    type: 'NUMBER_OF_Menus',
    payload: num
  }
}

export const numOfDrinkOptions = (num) => {
  return {
    type: 'NUMBER_OF_DRINK_OPTIONS',
    payload: num
  }
}

