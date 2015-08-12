
//document.getElementById("MyElement").className += " MyClass";


function ffocus(CtrlID)
{
    try { document.getElementById(CtrlID).focus() } catch(e){};
    //setSelectionRange(TextBoxID);
}

// cuma bisa di IE
//function cancelBack()   
//{   
//    if ((event.keyCode == 8 ||    
//       (event.keyCode == 37 && event.altKey) ||    
//       (event.keyCode == 39 && event.altKey))   
//        &&    
//       (event.srcElement.form == null || event.srcElement.isTextEdit == false)   
//      )   
//    {   
//        event.cancelBubble = true;   
//        event.returnValue = false;   
//    }   
//}

// cuma bisa di IE
// cara pake cancelBack(event.keyCode,event.altKey,event.srcElement.form,event.srcElement.isTextEdit)
function cancelBack(EventKeyCode, EventAltKey, EventSrcElementForm, EventSrcElementIsTextEdit)
{   
    if ((EventKeyCode == 8 ||    
       (EventKeyCode == 37 && EventAltKey) ||    
       (EventKeyCode == 39 && EventAltKey))   
        &&    
       (EventSrcElementForm == null || EventSrcElementIsTextEdit == false)   
      )   
    {   
        event.cancelBubble = true;   
        event.returnValue = false;   
    }   
}

function PostBackCtrlID_Enter(EventKeyCode, CtrlID)
{
	if (EventKeyCode == 13) // enter
	{
		__doPostBack(CtrlID,'');
		try { window.event.returnValue=false; } catch(e){};
	}
}

function setSelectionRange(TextBoxID)
{
    var inputField = document.getElementById(TextBoxID);
    if (inputField != null && inputField.value.length != 0)
    {
        if (inputField.createTextRange)
        {
            var FieldRange = inputField.createTextRange();
            FieldRange.moveStart('character',
            inputField.value.length);
            FieldRange.collapse();
            FieldRange.select();
        }
    }
}

function closeWindowPostBackReturnValue(Value, TextBoxID)
{
    try
    {   
        window.opener.document.getElementById(TextBoxID).value=Value;
        window.opener.__doPostBack(TextBoxID, '');
//        window.opener.document.getElementById(TextBoxID).focus();
//        window.opener.document.getElementById(TextBoxID).select();
        window.close();
    }	
    catch(e){};
}

function closeWindow_Escape(EventKeyCode)
{
   if (EventKeyCode==27) // Escape
   {
        window.close();
   }
}


//function ShowModal () {
//var forename = document.getElementById ("forename");
//var surname = document.getElementById ("surname");

//var sharedObject = {};
//sharedObject.forename = forename.value;
//sharedObject.surname = surname.value;

//if (window.showModalDialog) {
//    var retValue = showModalDialog ("modal.htm", sharedObject, "dialogWidth:200px; dialogHeight:200px; dialogLeft:300px;");
//    if (retValue) {
//        UpdateFields (retValue.forename, retValue.surname);
//    }
//}
//else {
//        // for similar functionality in Opera, but it's not modal!
//    var modal = window.open ("modal.htm", null, "width=200,height=200,left=300,modal=yes,alwaysRaised=yes", null);
//    modal.dialogArguments = sharedObject;
//}

function openShowModalDialogWindow(url, win_name, w, h, resizeble, scrollable) 
{
    var width = w;
    var height = h;
    var left = parseInt((screen.availWidth/2) - (width/2));
    var top = parseInt((screen.availHeight/2) - (height/2));
    var scroll = 'no';
    var resize = 'no';
    
    if (typeof(scrollable)!=='undefined')
	{
	    scroll = scrollable;
	}
	
	if (typeof(resizeble)!=='undefined')
	{
	    resize = resizeble;
	}
    //var windowFeatures = "dialogWidth: " + width + "px; dialogHeight: " + height + "px; dialogTop: " + top + "; dialogLeft: " + left + "; edge: Raised; center: Yes; center: 1; center: on; help: No; scroll: " + scroll + "; resizable: " + resize + "; status: No"
    var windowFeatures = "dialogWidth: " + width + "px; dialogHeight: " + height + "px; dialogTop: " + top + "; dialogLeft: " + left;
    var myWindow = window.showModalDialog(url, win_name, windowFeatures);
    try { myWindow.focus(); } catch(e){};
    try { window.event.returnValue=false; } catch(e){};
    
    //if (parseInt(navigator.appVersion) >= 4) { win.window.focus();window.event.returnValue=false;}
}

function openFullScreenWindow(url, win_name, resizeble, scrollable) 
{
    var width = screen.availWidth;
    var height = screen.availHeight;
    var left = parseInt((screen.availWidth/2) - (width/2));
    var top = parseInt((screen.availHeight/2) - (height/2));
    var scroll = 'no';
    var resize = 'no';
    
    if (typeof(scrollable)!=='undefined')
	{
	    scroll = scrollable;
	}
	
	if (typeof(resizeble)!=='undefined')
	{
	    resize = resizeble;
	}
		
    var windowFeatures = "width=" + width + ",height=" + height + ",status=no,toolbar=no,menubar=no,resizable=" + resize + ",scrollbars=" + scroll + ",location=no,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
    var myWindow = window.open(url, win_name, windowFeatures);
    myWindow.focus();
    try { window.event.returnValue=false; } catch(e){};
    
    //if (parseInt(navigator.appVersion) >= 4) { win.window.focus();window.event.returnValue=false;}
}

function openWindow(url, win_name, w, h, resizeble, scrollable) 
{
    var width = w;
    var height = h;
    var left = parseInt((screen.availWidth/2) - (width/2));
    var top = parseInt((screen.availHeight/2) - (height/2));
    var scroll = 'no';
    var resize = 'no';
    
    if (typeof(scrollable)!=='undefined')
	{
	    scroll = scrollable;
	}
	
	if (typeof(resizeble)!=='undefined')
	{
	    resize = resizeble;
	}

	var windowFeatures = "width=" + width + ",height=" + height + ",status=no,toolbar=no,menubar=no,resizable=" + resize + ",scrollbars=" + scroll + ",location=no,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
	var myWindow = window.open(url, win_name, windowFeatures);
    myWindow.focus();
    try { window.event.returnValue=false; } catch(e){};
    
    //if (parseInt(navigator.appVersion) >= 4) { win.window.focus();window.event.returnValue=false;}
}

function openWindowForSL(url, ctrl, win_name, w, h, resizeble, scrollable)
{
    var isReadOnly=document.getElementById(ctrl).getAttribute("readonly");
    var isDisabled=document.getElementById(ctrl).getAttribute("disabled");
    if (isReadOnly==true||isReadOnly=='readonly')
    {
        alert('Cannot currently modify this field, it is read-only.');
        try { window.event.returnValue=false; } catch(e){};
    }
    else if (isDisabled==true||isDisabled=='disabled')
    {
        alert('Cannot currently modify this field, it is disabled.');
        try { window.event.returnValue=false; } catch(e){};
    }
    else
    {
        //alert(url);
        openWindow(url, win_name, w, h, resizeble, scrollable);
    }
}

function openWindowForSLKeyCode(EventKeyCode,url, ctrl, win_name, w, h, resizeble, scrollable)
{
    if (EventKeyCode == 113) // f2
    {
        openWindowForSL(url, ctrl, win_name, w, h, resizeble, scrollable)       
    }
}


//function Minimize() 
//{
//    window.innerWidth = 100;
//    window.innerHeight = 100;
//    window.screenX = screen.width;
//    window.screenY = screen.height;
//    alwaysLowered = true;
//}

//function Maximize() 
//{
//    window.innerWidth = screen.width;
//    window.innerHeight = screen.height;
//    window.screenX = 0;
//    window.screenY = 0;
//    alwaysLowered = false;
//}

//function center()
//{
//    var xcenter=(screen.availWidth-800)/2;
//    var ycenter=(screen.availHeight-600)/2;				
//    self.resizeTo(800,600);
//    self.moveTo(xcenter,ycenter);
//}

// cara  pake onload="SetApproved();"
function SetImageCenter(DivID, width, height) {
    try {
        //			    /*x = event.clientX + document.body.scrollLeft; */
//        var width = 125;
//        var height = 125;
        var left = parseInt((screen.availWidth / 2) - (width / 2));
        var top = parseInt((screen.availHeight / 2) - (height / 2));
        //			    /*y = event.clientY + document.body.scrollTop + 10; */
        //			    /* get the mouse top position  */
        document.getElementById(DivID).style.left = left + 'px';
        document.getElementById(DivID).style.top = top + 'px';
        document.getElementById(DivID).style.display = "block";
    }
    catch (e) { };
}

function Prompt_Test(CtrlID,Message,DefaultValue)
{
    var answer = prompt(Message, DefaultValue);
   
   if(answer == null || answer == false)
   {
   }
   else
   {
       document.getElementById(CtrlID).value = answer;
   }
}   

function getIndex(input)
  {
    var index = -1, i = 0;
    while (i < input.form.length && index == -1)
      if (input.form[i] == input)index = i;
      else i++;
    return index;
  }

function SendTab(objForm, strField, evtKeyPress)
{
  var aKey = evtKeyPress.keyCode ?
    evtKeyPress.keyCode :evtKeyPress.which ?
      evtKeyPress.which : evtKeyPress.charCode;
  if (aKey == 115)
  {
    objForm[(getIndex(objForm[strField])) % objForm.length].focus();
  }
}
