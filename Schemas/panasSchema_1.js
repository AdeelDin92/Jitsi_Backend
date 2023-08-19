const mongoose = require('mongoose');
const { Schema } = mongoose;

const panasSchema = new mongoose.Schema({
    active: {
      type: Number,
      required: true,
    },
    interested: {
      type: Number,
      required: true,
    },
    excited: {
      type: Number,
      required: true,
    },
    determined: {
      type: Number,
      required: true,
    },
    inspired: {
      type: Number,
      required: true,
    },
    attentive: {
      type: Number,
      required: true,
    },
    distressed: {
      type: Number,
      required: true,
    },
    annoyed: {
      type: Number,
      required: true,
    },
    scared: {
      type: Number,
      required: true,
    },
    irritated: {
      type: Number,
      required: true,
    },
    nervous: {
      type: Number,
      required: true,
    },
    guilty: {
      type: Number,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
      timezone: 'Europe/Berlin'
    },
  });
  
  const PANAS = mongoose.model('PANAS_1', panasSchema);
  
  module.exports = PANAS;