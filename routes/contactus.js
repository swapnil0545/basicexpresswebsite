var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('contactus', { title: 'Contact Us' });
});

router.post('/send', (req, res, next) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'yourpass'
    }
  });
  let mailOptions  = {
     from : 'Express simple website <johndoe@live.com>',
     to : 'gmail.user@gmail.com',
     subject : 'Express simpleweb contactus submission',
     text : 'You have a new submission with the following details\n Name : '+req.body.name+' Email'+req.body.email + ' \nMesssage : '+req.body.massage,
     html : '<p><h3>You have a new mail</h3></p><ul><li>Name : '+req.body.name+' <li>Email'+req.body.email + ' <li>Messsage : '+req.body.massage+'</ul>'
  }

  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      return console.log(error);
    }
    console.log(`Message %s sent : %s`, info.messageId,info.response);
  })
})
module.exports = router;
