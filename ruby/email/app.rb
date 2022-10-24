#! /usr/bin/env ruby

require 'net/smtp'

class App
  def initialize
    @smtp = Net::SMTP.new 'smtp.gmail.com', 587
    @smtp.enable_starttls
    @smtp.start('gmail.com', '<your account email>', '<your app password, not your personal>', :login)
  end

  def send
    mailtext = <<EOF
From: From Name <from email address>
To: toemail@address.com
MIME-Version: 1.0
Content-type: text/html
Subject: Testing Ruby email message
<h1>Testing Ruby email message</h1>
<b>This is a test message</b>
EOF

    @smtp.send_message mailtext, '<from email>', '<to email>'
  end
end

if $PROGRAM_NAME == __FILE__
  app = App.new
  app.send
end