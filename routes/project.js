
/*
 * GET home page.
 */

exports.view = function(req, res){
  var name = req.params.name;
  console.log("The project's name is: " + name);
  res.render("project" , {
    "projectName": name
  });
};