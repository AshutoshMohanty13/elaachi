const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

function emailHtml() {
  return `<!DOCTYPE html>
  <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  body {font-family: Arial, Helvetica, sans-serif;}
  * {box-sizing: border-box;}
  
  input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }
  
  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
  
  .subjectID {
  display: flex;
  }
  
  .subjectTextArea {
    display: inline-block;
    vertical-align: top;
    width: 80%;
    resize: none;
  }
  
  .subjectButton {
    display: inline-block;
    vertical-align: top;
    margin-top: 7px;
  }
  
  </style>
  </head>
  <body>
  
  <div class="container">
    <form action="/action_page.php">
      <label for="fname">Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Sample Template">
  
      <label for="lname">Description</label>
      <textarea type="text" id="lname" name="lastname" placeholder="Sample Template"></textarea>
  
      <label for="country">Scope</label>
      <select id="country" name="country">
        <option value="australia">Product</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
  
      <label for="lname">Subject</label>
      <br/>
      <div class="subjectTextArea">
          <input type="text" name="lastname" placeholder="Classout- Overall Project performence">
      </div>
      <div class="subjectButton">
        <button type="button" name="button" style="width:240px; height: 41px;background-color: #d8e3e7;border: 1px solid #ccc;">Add Parameter</button>
      </div>
  
  
      <br/>
      <label for="subject">Body</label>
      <textarea id="subject" name="subject" placeholder="Sample Template" style="height:200px"></textarea>
      <input type="submit" value="Submit">
    </form>
  </div>
  
  </body>
  </html>
  `;
}

function getMessage(emailParams) {
  return {
    to: emailParams.toEmail,
    from: 'sendersmail@gmail.com',
    subject: emailParams.subject,
    text: ``,
    html: emailHtml(),
  };
}

async function sendMail(emailParams) {
  try {
    await sendGridMail.send(getMessage(emailParams));
    return  { message: `email sent successfully`};
  } catch (error) {
    const message = `Mail not sent`;
    console.error(message);
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }
    return {message};
  }
}

module.exports = {
    sendMail
}