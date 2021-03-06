export const TIMES = [
  {test: /ns/, magnitude: 0},
  {test: /µs/, magnitude: 1},
  {test: /u/, magnitude: 1},
  {test: /^\d*ms/, magnitude: 2},
  {test: /^\d*s/, magnitude: 3},
  {test: /^\d*m\d*s/, magnitude: 4},
  {test: /^\d*h\d*m\d*s/, magnitude: 5},
];

export const ADMIN_NOTIFICATION_DELAY = 1500 // milliseconds
