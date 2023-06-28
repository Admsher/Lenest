function getMD5Hash(value) {
  value = value + generateRandomString(8) // added this
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5,
                                         value,
                                         Utilities.Charset.UTF_8)
  let hash = ''
  for (i = 0; i < digest.length; i++) {
    let byte = digest[i]
    if (byte < 0) byte += 256
    let bStr = byte.toString(16)
    if (bStr.length == 1) bStr = '0' + bStr
    hash += bStr
  }
  return hash
}

function generateRandomString(length) {
  const randomNumber = Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
  const randomString = Math.round(randomNumber).toString(36).slice(1)
  return randomString
}

function doGet(e) {
  const email = e.parameter['Email_ID']
  const unsubscribeHash = e.parameter['unsubscribe_hash']
  const success = unsubscribeUser(email, unsubscribeHash)
  if (success) {
    return ContentService.createTextOutput().append('You have unsubscribed')
  }
  return ContentService.createTextOutput().append('Failed')
}

function testFunction(emailToUnsubscribe, unsubscribeHash){
  var wrkBk=SpreadsheetApp.getActiveSpreadsheet();
  var wrkShtEmailID= wrkBk.getSheetByName('Email_ID');
  var wrkShtMessage=wrkBk.getSheetByName('Mail_Details');
  const data = wrkShtEmailID.getDataRange().getValues();
  var subject=wrkShtMessage.getRange('A2').getValue();
  var message=wrkShtMessage.getRange('B2').getValue();
  const now = new Date();
  var reqlength=wrkShtEmailID.getLastRow();
  const headers = data[0];
  const emailIndex = headers.indexOf('Email_ID');
  const unsubscribeHashIndex = headers.indexOf('unsubscribe_hash');
  const subscribedIndex = headers.indexOf('Subscription');

var finalmsg="Dear [Recipient],\n"+
"I hope this email finds you well. I am writing to schedule an appointment with you on behalf of LeNest.\n"+
"The appointment is for your [Test]  which is due in this week.\n"+
"[Explanation]\n"+
"If not possible at the clinic,you can refer to the videos mentioned above and consult to a professional gynaeceologist available.\n"+            
"Here are some points to look for before: \n [Precautions]\n"+
"Thank you for considering our request. We look forward to hearing back from you.\n"+
"Best regards,\n"+
"   LeNest" ;  

finalmsg=finalmsg.replace("   LeNest","   LeNest"+"\n"+wrkShtMessage.getRange("B33").getValue()+"\n"+wrkShtMessage.getRange("B34").getValue()+"\n"+wrkShtMessage.getRange("B35").getValue());
  var patient = 2;

  for(patient=2;patient<=reqlength;patient++){
    var fname = wrkShtEmailID.getRange('A'+patient).getValue();
    var lname=wrkShtEmailID.getRange('B'+patient).getValue();
    var emailaddress=wrkShtEmailID.getRange('C'+patient).getValue();
    var expected_date=new Date( wrkShtEmailID.getRange('D'+patient).getValue());
    var todays_date=new Date();
    expected_date=expected_date.getTime();
    todays_date = todays_date.getTime();
    var diffInDays = Math.floor((expected_date-todays_date)/(24*3600*1000));
    var weekRemaining=Math.floor(diffInDays/7);
    Logger.log(weekRemaining);
    
    if(wrkShtEmailID.getRange('E'+patient).getValue()=="Valid") { 
      if(weekRemaining==30){
        if(wrkShtEmailID('T'+patient).getValue() =="Not Sent"){
          finalmsg=finalmsg.replace("[Recipient]",fname+lname);
          finalmsg=finalmsg.replace("[Test]","nuchal scan,MGTT");
          finalmsg=finalmsg.replace("[Precautions]","1.Keep a 2hrs fast before the tests\n2. 75 gram of glucose to be ingested");
          finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B2').getValue()+"\n");
          MailApp.sendEmail(emailaddress,subject,finalmsg);
          wrkShtEmailID('T'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==23){
        if(wrkShtEmailID('AA'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Test]","anamoly scan");
        finalmsg=finalmsg.replace("[Precautions]","No Precaution unless mentioned by doctor.");
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B3').getValue()+"\n");
        MailApp.sendEmail(emailaddress,subject,finalmsg);
         wrkShtEmailID('AA'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==19){
        if(wrkShtEmailID('AE'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Test]","vaccination for TT");
        finalmsg=finalmsg.replace("[Precautions]","1.If you have already taken the Injection,there is no need to take it again");
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B4').getValue()+"\n");
        MailApp.sendEmail(emailaddress,subject,finalmsg);
        wrkShtEmailID('AE'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==17){
        if(wrkShtEmailID('AG'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Test]","CBC,MGTT and Urine R test,3D scan,TDap(Booster dose of TT) and Flu Vaccine");
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B5').getValue()+"\n");
        finalmsg=finalmsg.replace("[Precautions]","1.75 gram of glucose to be ingested \n 2.Urine should be collected before drinking the glucose mixture.");
        MailApp.sendEmail(emailaddress,subject,finalmsg);
        wrkShtEmailID('AG'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==9){
        if(wrkShtEmailID('AO'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Test]","Growth scan");
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B6').getValue()+"\n");
        finalmsg=finalmsg.replace("[Precautions]","No precaution unless mentioned by doctor. \n");
        MailApp.sendEmail(emailaddress,subject,finalmsg);
        wrkShtEmailID('AO'+patient).setValue("Sent");
        }
      }
      // ecosprin precaution
      if(weekRemaining==5){
        if(wrkShtEmailID.getRange('AS'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Test]","Dopler flow");
        finalmsg=finalmsg.replace("[Explanation]","This test is performed to check the bloodflow in placenta,uterus and foetus\n");
        finalmsg=finalmsg.replace("[Precautions]","No precaution unless mentioned by doctor.\n");
        MailApp.sendEmail(emailaddress,subject,finalmsg);
        wrkShtEmailID.getRange('AS'+patient).setValue("Sent");
        }
      }
       
       if(weekRemaining==1){
        wrkShtEmailID.getRange('E'+patient).setValue("Invalid");
        continue;
      }
    }
   
  }
  // iterate through the data, starting at index 1
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const email = row[emailIndex];
    const hash = row[unsubscribeHashIndex];
    if (emailToUnsubscribe === email && unsubscribeHash === hash) {
      sheet.getRange(i+1, subscribedIndex+1).setValue('Invalid')
      return true;
    }
  
  }
}