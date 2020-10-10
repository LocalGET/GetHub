const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://adm_localget:RZ68wkhjSmQqLmj@cluster0.yt67s.mongodb.net/hackathon?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


module.exports = mongoose;