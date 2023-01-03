const nodemailer = require('nodemailer');

const sendInbox = async (data) => {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "6b6af75c215049",
          pass: "d5f7bb4f1c3508"
        }
      });

      transport.sendMail(data, (err, info) => {
        if (err) {
            console.log(err);
            } else {
                return info.response;
            }
        });
};

module.exports = {
    sendInbox
}