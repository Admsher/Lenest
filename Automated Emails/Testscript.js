function testFunction(emailToUnsubscribe, unsubscribeHash){
  var wrkBk=SpreadsheetApp.getActiveSpreadsheet();
  var wrkShtEmailID= wrkBk.getSheetByName('Email_ID');
  var wrkShtMessage=wrkBk.getSheetByName('Mail_Details');
  var wrkShtTests=wrkBk.getSheetByName('Tests');
  const data = wrkShtEmailID.getDataRange().getValues();
  var subject=wrkShtMessage.getRange('A2').getValue();;
  var reqlength=wrkShtEmailID.getLastRow();
  const headers = data[0];
  var last_row = wrkShtMessage.getRange(1, 12, wrkShtMessage.getLastRow(), 1).getValues().filter(String).length;

var finalmsg="Dear [Recipient],\n"+
"I hope this email finds you well. I am writing to schedule an appointment with you on behalf of LeNest."+
"The appointment is for your [Test]  which is due in this week.\n"+
"[Explanation]\n"+
"If not possible at the clinic,you can refer to the videos mentioned and consult to a professional gynaeceologist available.\n"+            
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
    var todays_date1=new Date();
    expected_date=expected_date.getTime();
    todays_date = todays_date1.getTime();
    var diffInDays = Math.floor((expected_date-todays_date)/(24*3600*1000));
    var weekRemaining=Math.floor(diffInDays/7);
    Logger.log(weekRemaining);
    
    if(wrkShtEmailID.getRange('E'+patient).getValue()=="Valid") { 
      if(weekRemaining==31){
        if(wrkShtTests.getRange('C'+patient).getValue() =="Not Sent"){
          finalmsg=finalmsg.replace("[Recipient]",fname+lname);
          finalmsg=finalmsg.replace("[Test]","nuchal scan,MGTT");
          finalmsg=finalmsg.replace("[Precautions]","1.Keep a 2hrs fast before the tests\n2. 75 gram of glucose to be ingested");
          finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B2').getValue()+"\n");
          MailApp.sendEmail(emailaddress,subject,finalmsg);
          wrkShtTests.getRange('C'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==24){
        if(wrkShtTests.getRange('D'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Test]","anamoly scan");
        finalmsg=finalmsg.replace("[Precautions]","No Precaution unless mentioned by doctor.");
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B3').getValue()+"\n");
        MailApp.sendEmail(emailaddress,subject,finalmsg);
         wrkShtTests.getRange('D'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==20){
        if(wrkShtTests.getRange('E'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Test]","vaccination for TT");
        finalmsg=finalmsg.replace("[Precautions]","1.If you have already taken the Injection,there is no need to take it again");
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B4').getValue()+"\n");
        MailApp.sendEmail(emailaddress,subject,finalmsg);
        wrkShtTests.getRange('E'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==18){
        if(wrkShtTests.getRange('F'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Test]","CBC,MGTT and Urine R test,3D scan,TDap(Booster dose of TT) and Flu Vaccine");
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B5').getValue()+"\n");
        finalmsg=finalmsg.replace("[Precautions]","1.75 gram of glucose to be ingested \n 2.Urine should be collected before drinking the glucose mixture.");
        MailApp.sendEmail(emailaddress,subject,finalmsg);
        wrkShtTests.getRange('F'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==10){
        if(wrkShtTests.getRange('G'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Test]","Growth scan");
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B6').getValue()+"\n");
        finalmsg=finalmsg.replace("[Precautions]","No precaution unless mentioned by doctor. \n");
        MailApp.sendEmail(emailaddress,subject,finalmsg);
        wrkShtTests.getRange('G'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==6){
        if(wrkShtTests.getRange('H'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Test]","Dopler flow");
        finalmsg=finalmsg.replace("[Explanation]","This test is performed to check the bloodflow in placenta,uterus and foetus\n");
        finalmsg=finalmsg.replace("[Precautions]","No precaution unless mentioned by doctor.\n");
        MailApp.sendEmail(emailaddress,subject,finalmsg);
        wrkShtTests.getRange('H'+patient).setValue("Sent");
        }
      }
       
       if(weekRemaining==1){
        wrkShtTests.getRange('E'+patient).setValue("Invalid");
        continue;
        }
      
      }

    wrkShtMessage.getRange('N'+last_row).setValue("Sent");
    wrkShtMessage.getRange('L'+last_row).setValue(todays_date1);
    wrkShtMessage.getRange('N3').setValue("Sent");
    wrkShtMessage.getRange('L3').setValue(todays_date1);
    }
    
  }