/* eslint-disable camelcase */
require('dotenv').config();

const getAll = (option) => {
  const {
    description, location, page, full_time
  } = option;
  const des = description === undefined ? '' : `description=${option.description}`
  const loc = location === undefined ? '' : `location=${location}`;
  const pag = page === undefined ? '' : `page=${page}`;
  const ftime = full_time === undefined ? '' : `full_time=${full_time}`;
  const arr = [des, loc, pag, ftime];
  const filteredArr = arr.filter(str => str !== '');
  const param = filteredArr.join('&')
  const findData = fetch(`${process.env.API_URL}?${param}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
  return findData
}

const getBy = (option) => {
  const findData = fetch(`${process.env.API_URL_DETAIL}/${option}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);
  return findData
}

module.exports = {
  getAll,
  getBy
}
