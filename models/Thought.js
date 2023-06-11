// require moment for date
const moment = require("moment");

// require mongoose
const { Schema, model, Types } = require("mongoose");

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
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
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

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Thought required",
      // thought must be between 1 and 280 characters
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      // set default value is current date
      default: Date.now,
      // using getter method format date
      get: (timestamp) => moment(timestamp).format("MMM Do,YYYY [at] hh:mm a"),
    },
    // username that creted thought
    username: {
      type: String,
      required: true,
    },
    // like replies - array of nested documents created with reactionSchema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize the Thought model
const Thought = model("Thought", thoughtSchema);

// export Thought model
module.exports = Thought;
