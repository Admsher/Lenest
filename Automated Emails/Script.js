

function myFunction(){
  var wrkBk=SpreadsheetApp.getActiveSpreadsheet();
  var wrkShtEmailID= wrkBk.getSheetByName('Email_ID');
  var wrkShtMessage=wrkBk.getSheetByName('Mail_Details');

  var subject=wrkShtMessage.getRange('A2').getValue();
  var message=wrkShtMessage.getRange('B2').getValue();
  const now = new Date();
  var reqlength=wrkShtEmailID.getLastRow();


  var finalmsg="";

  var i = 2;

  for(i=2;i<=reqlength;i++){
    var fname = wrkShtEmailID.getRange('A'+i).getValue();
    var lname=wrkShtEmailID.getRange('B'+i).getValue();
    var emailaddress=wrkShtEmailID.getRange('C'+i).getValue();
    var expected_date=new Date( wrkShtEmailID.getRange('D'+i).getValue());
    var todays_date=new Date();
    t1=expected_date.getTime();
    t2 = todays_date.getTime();
    var diffInDays = Math.floor((t1-t2)/(24*3600*1000));
    var weekRemaining=Math.floor(diffInDays/7)+1;
    Logger.log(weekRemaining);
    
      if(weekRemaining==29){
        finalmsg="You have nuchal scan";
      }
      if(weekRemaining==22){
        finalmsg="You have anamoly scan";
      }
      if(weekRemaining==18){
        finalmsg="You have Injection TT";
      }
      if(weekRemaining==16){
        finalmsg="You have CBC,MGTT and Urine R test";
      }
      if(weekRemaining==15){
        finalmsg="You have a 3D scan";
      }
      if(weekRemaining==14){
        finalmsg="You have Inj. TDap and Flu Vaccine";
      }
      if(weekRemaining==8){
        finalmsg="You have Growth scan";
      }
      if(weekRemaining==4){
        finalmsg="You have Dopler flow";
      }
      else continue;
      MailApp.sendEmail(emailaddress,subject,finalmsg);
  }
}