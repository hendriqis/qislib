function HighlightRow(chlidChk, ColorTextHighLight, ColorTextNormal) {
    //alert(chlidChk.childElement.name);
    var LColorTextHighLight = '#1E90FF';
    var LColorTextNormal = 'transparent';

    if (typeof (ColorTextHighLight) !== 'undefined')
        LColorTextHighLight = ColorTextHighLight;

    if (typeof (ColorTextNormal) !== 'undefined')
        LColorTextNormal = ColorTextNormal;

    //jalan cuma di IE
    //chlidChk.parentElement.parentElement.style.backgroundColor = LColorTextHighLight; 

    if (chlidChk.checked)
        chlidChk.parentNode.parentNode.style.backgroundColor = LColorTextHighLight;
    else
        chlidChk.parentNode.parentNode.style.backgroundColor = LColorTextNormal;
}


//cara pake CheckAll(this.form,this,'gridAkumulasiFA_chkPilih')
function CheckAll(form, parentChk, chlidChk, ColorTextHighLight, ColorTextNormal) 
{
    //form = this.form
    //var elements = document.getElementsByTagName("INPUT"); 
    for(i=0; i<form.elements.length;i++) 
    {  
        if (form.elements[i].name.indexOf(chlidChk) > -1 && 
            (Right(form.elements[i].name,(String(chlidChk).length)) == chlidChk))
	    {   
            form.elements[i].checked = parentChk.checked; 
            HighlightRow(form.elements[i], ColorTextHighLight, ColorTextNormal);
        }
    }
}

//F Confirm delete untuk datagrid
function MsgDeleteRecordInGrid()
{
    if (!confirm('Are you sure want to delete this record?'))
        return false;
    return true;
}