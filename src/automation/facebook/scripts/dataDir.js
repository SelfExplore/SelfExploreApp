/* create a dynamic pointer to the user data folder *//* create a dynamic pointer to the user data folder */
import process from "process"
import path from "path"

function dataDir(socialMedia = 'facebook'){
  console.log(path.join(process.cwd(), `/src/user_data/${socialMedia}`));
  return path.join(process.cwd(), `/src/user_data/${socialMedia}`)
}

export default dataDir