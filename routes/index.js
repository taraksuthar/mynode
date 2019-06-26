
exports.home= function(req,res){
   
    res.render('home',{

        });
};

exports.notFound=function(req,res){
    res.send("this is not the page you are looking for");
};