// require moment for date 
const moment =require('moment');

// require mongoose
const {Schema, model} = require('mongoose');

// require Reaction model
const reactionSchema = require('./Reaction');


// Schema to create Thought model
const thoughtSchema = new Schema(
{
    thoughtText:{
        type:String,
        required:'Thought required',
        // thought must be between 1 and 280 characters
        min:1,
        max:280,
    },
    createdAt:{
        type:Date,
        // set default value is current date
        default:Date.now,
        // using getter method format date
        get: (timestamp) => moment(timestamp).format('MMM Do,YYYY [at] hh:mm a'),
    },
    // username that creted thought
    username:{
        type:String,
        required: true,
    },
    // like replies - array of nested documents created with reactionSchema
    reactions:[reactionSchema],
},
{
    toJSON:{
        getters:true,
    
    },
    id:false,
}
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

// Initialize the Thought model
const Thought = model('Thought',thoughtSchema);

// export Thought model
module.exports = Thought;
    