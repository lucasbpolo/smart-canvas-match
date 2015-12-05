angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Google',
    lastText: 'You on your way?',
    face: 'https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/93616/area14mp/image-20150902-6700-t2axrz.jpg'
  },
  {
    id: 1,
    name: 'CI&T',
    lastText: 'Hey, it\'s me',
    face: 'http://www.ciandt.com/ciandt-e/images/logo-larger.jpg'
  },
  {
    id: 2,
    name: 'Microsoft',
    lastText: 'I should buy a boat',
    face: 'https://www.appbugs.co/home/wp-content/uploads/2015/01/Microsoft-Logo-3-832x1024.jpg'
  },
  {
    id: 3,
    name: 'Adobe',
    lastText: 'Look at my mukluks!',
    face: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/2000px-Adobe_Systems_logo_and_wordmark.svg.png'
  },
  {
    id: 4,
    name: 'Apple',
    lastText: 'This is wicked good ice cream.',
    face: 'http://archiveteam.org/images/1/15/Apple-logo.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Partners', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var partners = [
    { image: 'https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/93616/area14mp/image-20150902-6700-t2axrz.jpg' },
    { image: 'http://www.ciandt.com/ciandt-e/images/logo-larger.jpg' },
    { image: 'https://www.appbugs.co/home/wp-content/uploads/2015/01/Microsoft-Logo-3-832x1024.jpg' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/2000px-Adobe_Systems_logo_and_wordmark.svg.png' },
    { image: 'http://archiveteam.org/images/1/15/Apple-logo.jpg' },
  ];

  return {
    all: function() {
      return partners;
    }
  };
});
