const asyncHandler =(fn) => (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((error) => next(error))
    }
}

export { asyncHandler }











// const asyncHandler =(fn) => async(req,resizeBy,next) => {
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         resizeBy.status(error.code ||500).json({
//             sucess: false,
//             message: error.message
//         })
//     }
// }