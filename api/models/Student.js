/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      required: true,
      unique: true,
      minLength: 1,
      maxLength: 10
    },
    name: {
      type: 'string',
      required: true
    },
    class: {
      type: 'integer',
        required: true
    },
    count: {
      type: 'integer',
      required: true
    },
    image:{
        type: 'string',
        required: true
    },
  },
  autoCreatedAt: false,
  autoUpdatedAt: false,
};
