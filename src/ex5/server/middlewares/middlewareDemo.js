export function logger(req, res, next) {
  console.log("just a middleware");
  next();
}
