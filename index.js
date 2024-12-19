// array users is an array of objects

const users = [
  {
    name: "Reuben O.",
    username: "@blood_pressure_killa",
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege.",
  },
  {
    name: "Laisha C",
    username: "@passaic_papi",
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours.",
  },
  {
    name: "Anne H.",
    username: "@i_love_bambas",
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend",
  },
  {
    name: "Steph S.",
    username: "@queen_of_the_kew",
    followers: 1200,
    verified: false,
    bio: "✌🏼",
  },
  {
    name: "Carmen S",
    username: "@omar_apollo_fanclub",
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21.",
  },
];

// first return an array containing only the name property of each user.

const nameFilter = (array) => {
  // create an array where you can store all of the names from each object in the array
  const namesArray = array.map((element) => element.name);
  return namesArray;
};

console.log(nameFilter(users));

// second return an array of only the verified users

const getVerifiedUsers = (array) => {
  const verifiedUsersArray = array.filter(
    (element) => element.verified === true
  );
  return verifiedUsersArray;
};

console.log(getVerifiedUsers(users));

// third return an array of all the users with less than 1000 followers.

const strugglingUsers = (array) => {
  const strugglingUsersArray = array.filter(
    (element) => element.followers < 1000
  );
  return strugglingUsersArray;
};

console.log(strugglingUsers(users));

// write a function, searchUsername, that takes a string along with the array of objects
// and returns the user object who stricly matches the str parameter

const searchUsername = (array, str) => {
  const userArray = array.filter((element) => element.username === str);
  const user = userArray[0];

  return user;
};

console.log(searchUsername(users, "@passaic_papi"));

// return the object with the longest bio

const whoHasLongestBio = (array) => {
  let currentLength = 0;
  let userWithLongestBio = "";

  const longestBioArray = array.forEach((element) => {
    if (element.bio.length > currentLength) {
      currentLength = element.bio.length;
      userWithLongestBio = element;
    }
  });
  return userWithLongestBio;
};

console.log(whoHasLongestBio(users));

// return an array sorted by follower count, least to greatest
const sortUsersByFollowerCount = (array) => {
  return array.sort((a, b) => a.followers - b.followers);
};
console.log(sortUsersByFollowerCount(users));
