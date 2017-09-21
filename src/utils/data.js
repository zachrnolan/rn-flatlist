import _ from 'lodash'

export const get_data = (num, skip) => {
  return _.range(skip, skip + num).map((x, i) => ({id: i, title: 'List Item ' + i}))
}
