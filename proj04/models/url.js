const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId : {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        //required: true,
    },
    visitHistory: [{ // array of objects
        timestamp: { 
            type: Date,
            default: Date.now
        }
    }],  
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    expiresAt: {
        type: Date,
        default: () => Date.now() + 24 * 60 * 60 * 1000  // delete after 24h
    }
}, 
    {timestamps: true}
);

// TTL index
urlSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });


const URL = mongoose.model("url", urlSchema);

module.exports = URL;