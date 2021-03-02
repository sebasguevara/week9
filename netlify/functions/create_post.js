// /.netlify/functions/create_post
let firebase = require('./firebase')

exports.handler = async function(event) {
  let db = firebase.firestore()

  // console.log(event)
  let body = JSON.parse(event.body)
  let userId = body.userId
  let username = body.username
  let imageUrl = body.imageUrl

  // userId: currentUserId,
  // username: postUsername,
  // imageUrl: postImageUrl

  // console.log(`user ID is ${userId}`)
  // console.log(`username is ${username}`)
  // console.log(`imageUrl is ${imageUrl}`)


  // 🔥🔥🔥 Lab
  // Step 2: Parse out the post data, i.e. the event.body – pull out 
  //         the user ID, username, and image URL that is provided
  //         in the POST request, and assign to variables. Use 
  //         console.log if necessary, to ensure the values are what
  //         you're expecting.

  let createdStamp = firebase.firestore.FieldValue.serverTimestamp()
  let post = {
    imageUrl: imageUrl,                         
    username: username,                         
    userId: userId,
    likes: 0,
    created: createdStamp 
  }
  let newPost = await db.collection('posts').add(post)
  
  // console.log(newPost)
  post.id = newPost.id
  // post.push(newPostId)
  // Step 3: Construct an object of data to send to Firestore – this
  //         object should include the user ID, username, image URL,
  //         and a "created" timestamp – can use the built-in function
  //         for this – firebase.firestore.FieldValue.serverTimestamp()
  // Step 4: Add the post to Firestore using the .add() function.
  // Step 5: Add the newly created post's auto-generated ID to the object
  //         you created in Step 3, and return that entire object as the
  //         body of the return value, using JSON.stringify()



  return {
    statusCode: 200,
    body: JSON.stringify(post)
  }

}