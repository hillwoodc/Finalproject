const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  interests: [
    {
      household: {
        type: Boolean,
        default: false
      },
      events: {
        type: Boolean,
        default: false
      },
      automotive: {
        type: Boolean,
        default: false
      },
      health: {
        type: Boolean,
        default: false
      },
      educational: {
        type: Boolean,
        default: false
      },
      groceries: {
        type: Boolean,
        default: false
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
