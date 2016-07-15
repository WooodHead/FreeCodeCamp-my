var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ArticleSchema=new Schema(
{
  title:String,
  content: String
});

ArticleSchema.statics={
  load: function(id, cb){
    this.findOne({
      _id: id
    }).exec(cb);
  }
  
};

mongoose.model('Article', ArticleSchema);