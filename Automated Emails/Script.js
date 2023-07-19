function weekFunction(){
  var wrkBk=SpreadsheetApp.getActiveSpreadsheet();
  var wrkShtEmailID= wrkBk.getSheetByName('Email_ID');
  var wrkShtMessage=wrkBk.getSheetByName('Mail_Details');
  var mailsubject=wrkShtMessage.getRange('A10').getValue();
  const now = new Date();
  var reqlength=wrkShtEmailID.getLastRow();
  const data = wrkShtEmailID.getDataRange().getValues();
  const headers = data[0];
  var folder=DriveApp.getFoldersByName('Lenest Doc').next();
  var last_row = wrkShtMessage.getRange(1, 12, wrkShtMessage.getLastRow(), 1).getValues().filter(String).length;
  

var finalmsg="Dear [Recipient],\n"+
"I hope this email finds you well. We are writing to provide you with an update for your pregnancy routine for this week.\n"+
"You can refer to the link in which the details are provided. \n"+
"[Explanation]\n"+
"Thank you for your continued support and please let us know if you have any questions or concerns. \n"+
"Best regards,\n"+
"   LeNest" ; 


finalmsg=finalmsg.replace("   LeNest","   LeNest"+"\n"+wrkShtMessage.getRange("B33").getValue()+"\n"+wrkShtMessage.getRange("B34").getValue()+"\n"+wrkShtMessage.getRange("B35").getValue());
  var patient = 2;

  for(patient=2;patient<=reqlength;patient++){
    var fname = wrkShtEmailID.getRange('A'+patient).getValue();
    var lname=wrkShtEmailID.getRange('B'+patient).getValue();
    var emailaddress=wrkShtEmailID.getRange('C'+patient).getValue();
    var expected_date=new Date( wrkShtEmailID.getRange('D'+patient).getValue());
    var hash=new Date( wrkShtEmailID.getRange('F'+patient).getValue());
    var todays_date=new Date();
    expected_date=expected_date.getTime();
    todays_date = todays_date.getTime();
    var diffInDays = Math.floor((expected_date-todays_date)/(24*3600*1000));
    var weekRemaining=Math.floor(diffInDays/7);
    Logger.log(weekRemaining);
    
    if(wrkShtEmailID.getRange('E'+patient).getValue()=="Valid") { 
      if(weekRemaining==41){
        if(wrkShtEmailID.getRange('I'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B10').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg});
        wrkShtEmailID.getRange('I'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==40){
        if(wrkShtEmailID.getRange('J'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+" "+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B11').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg});
        wrkShtEmailID.getRange('J'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==39){
        if(wrkShtEmailID.getRange('K'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B12').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg});
        wrkShtEmailID.getRange('K'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==38){
        if(wrkShtEmailID.getRange('L'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B13').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg});
        wrkShtEmailID.getRange('L'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==37){
        if(wrkShtEmailID.getRange('M'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B14').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg});
        wrkShtEmailID.getRange('M'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==36){
        if(wrkShtEmailID.getRange('N'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B15').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg});
        wrkShtEmailID.getRange('N'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==35){
        if(wrkShtEmailID.getRange('O'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Seventh Week.png');
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('O'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==34){
        if(wrkShtEmailID.getRange('P'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Eight Week.png');
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('P'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==33){
        if(wrkShtEmailID.getRange('Q'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 9.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('Q'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==32){
        if(wrkShtEmailID.getRange('R'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 10.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('R'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==31){
        if(wrkShtEmailID.getRange('S'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 11.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('S'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==30){
        if(wrkShtEmailID.getRange('T'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 12.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('T'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==29){
        if(wrkShtEmailID.getRange('U'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 13.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('U'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==28){
        if(wrkShtEmailID.getRange('V'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]"," ");
        var file= folder.getFilesByName('Week 14.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('V'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==27){
        if(wrkShtEmailID.getRange('W'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+" "+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");
        var file= folder.getFilesByName('Week 15.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('W'+patient).setValue("Sent");
        }
     }
       if(weekRemaining==26){
        if(wrkShtEmailID.getRange('X'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 16.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('X'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==25){
        if(wrkShtEmailID.getRange('Y'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 17.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('Y'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==24){
        if(wrkShtEmailID.getRange('Z'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 18.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('Z'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==23){
        if(wrkShtEmailID.getRange('AA'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 19.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AA'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==22){
        if(wrkShtEmailID.getRange('AB'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 20.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AB'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==21){
        if(wrkShtEmailID.getRange('AC'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B16').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
         wrkShtEmailID.getRange('AC'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==20){
        if(wrkShtEmailID.getRange('AD'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B17').getValue()+"\n");
          MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,
        attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AD'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==19){
        if(wrkShtEmailID.getRange('AE'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B18').getValue()+"\n");
          MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,
        attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AE'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==18){
        if(wrkShtEmailID.getRange('AF'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B19').getValue()+"\n");
          MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,
        attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AF'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==17){
        if(wrkShtEmailID.getRange('AG'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B20').getValue()+"\n");
          MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,
        attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AG'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==16){
        if(wrkShtEmailID.getRange('AH'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B21').getValue()+"\n");
          MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,
        attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AH'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==15){
        if(wrkShtEmailID.getRange('AI'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B22').getValue()+"\n");
        MailApp.sendEmail(emailaddress,subject,finalmsg,);
        wrkShtEmailID.getRange('AI'+patient).setValue("Sent");
        wrkShtEmailID.getRange('H'+patient).setVAlue("Week "+String(42-weekRemaining))
        }
      }
       if(weekRemaining==14){
        if(wrkShtEmailID.getRange('AJ'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 28.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,
        attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AJ'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==13){
        if(wrkShtEmailID.getRange('AK'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 29.png')
          MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,
        attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AK'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==12){
        if(wrkShtEmailID.getRange('AL'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B23').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AL'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==11){
        if(wrkShtEmailID.getRange('AM'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B24').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,});
        wrkShtEmailID.getRange('AM'+patient).setValue("Sent");
        wrkShtEmailID.getRange('H'+patient).setVAlue("Week "+String(42-weekRemaining))
        }
        
      }
      if(weekRemaining==10){
        if(wrkShtEmailID.getRange('AN'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B25').getValue()+"\n");
          MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg});
        wrkShtEmailID.getRange('AN'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==9){
        if(wrkShtEmailID.getRange('AO'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B26').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg});
        wrkShtEmailID.getRange('AO'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==8){
        if(wrkShtEmailID.getRange('AP'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
    
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B27').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg});
        wrkShtEmailID.getRange('AP'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==7){
        if(wrkShtEmailID.getRange('AQ'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]",wrkShtMessage.getRange('B28').getValue()+"\n");
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg});
        wrkShtEmailID.getRange('AQ'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==6){
        if(wrkShtEmailID.getRange('AR'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 15.png')
          MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg});
        wrkShtEmailID.getRange('AR'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==5){
        if(wrkShtEmailID.getRange('AS'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 37.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AS'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==4){
        if(wrkShtEmailID.getRange('AT'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 38.png')
          MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AT'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==3){
        if(wrkShtEmailID.getRange('AU'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 39.png')
          MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AU'+patient).setValue("Sent");
        }
      }
       if(weekRemaining==2){
        if(wrkShtEmailID.getRange('AV'+patient).getValue() =="Not Sent"){
        finalmsg=finalmsg.replace("[Recipient]",fname+lname);
        finalmsg=finalmsg.replace("[Explanation]", "  ");   
        var file= folder.getFilesByName('Week 40.png')
        MailApp.sendEmail({to:emailaddress,subject:mailsubject,body:finalmsg,attachments:[file.next().getAs(MimeType.PNG)]});
        wrkShtEmailID.getRange('AV'+patient).setValue("Sent");
        }
      }
      if(weekRemaining==1){
        wrkShtEmailID.getRange('E'+patient).setValue("Invalid");
        continue;
      }
         }
      
      wrkShtMessage.getRange('M'+last_row).setValue("Sent");
      wrkShtMessage.getRange('M3').setValue("Sent");
      }
   }
  