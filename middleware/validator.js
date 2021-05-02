
const validateFile =(req, res, next)=>
{
    const expectedFileType = [ 'png','jpg', 'jpeg'];
    if(!req.file){
       return res.json({success: false, message: 'Image is required!'})
    }
    const fileExtention= req.file.mimetype.split('/').pop();
    if(!expectedFileType.includes(fileExtention)){
       return res.json({success: false, message: 'Image is not valid!'})
    }
    next();

}
module.exports = {
    validateFile
};
