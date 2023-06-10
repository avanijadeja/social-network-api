const moment = require("moment");

const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      // Mongoose's ObjectId data type
      type: Schema.Types.ObjectId,
      //  Default value is set to a new ObjectId
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      // 280 character maximum
      maxlenght: 280,
    },
    username: {
      type: String,
      required: true,
    },
    creatdeAt: {
      type: Date,
      // Set default value to the current timestamp
      default: Date.now,
      //  Use a getter method to format the timestamp on query
      get: (timestamp) => moment(timestamp).format("MM Do,YYYY [at] hh:mm a"),
    },
  },
  {
    // getter method true for json 
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// export reactionSchema module
module.exports = reactionSchema;
