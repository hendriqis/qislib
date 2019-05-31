//=====================================================
// D I A L O G   F U N C T I O N
//-----------------------------------------------------
// The following functions are used to show the 
// look-up screen.
//=====================================================

function ShowDialogMenu(ctrl,app)
{
	_sd(urlbmenu+'?app='+app, ctrl);
}



// look up screen for indikator mutu
function ShowDialogIndikator(ctrl)
{
	_sd(urlbindikator, ctrl);
}

// look up screen for Ruang
function ShowDialogRuang(ctrl)
{
	_sd(urlbRuanganIndikator, ctrl);
}

// look up screen for indikator By Ruang
function ShowDialogIndikatorperRuang(ctrl,kdruang)
{
	_sd(urlbindikatorperruang+'?kdruang='+kdruang,ctrl)
}

//look up screen for IM_UNITRS
function showdialogIM_UnitRS(ctrl)
{
	_sd(urlbIM_UnitRS, ctrl);
}

// look up screen for ruang by profil
function showdialogruangbyprofil(ctrl,kdprofil)
{
	_sd(urlbruangbyprofil+'?kdprofil='+kdprofil, ctrl);
}

// look up screen for Ruang User Profile
//function showDialogRuangByProfile(ctrl,kdgroup)
//{
//	_sd(urlbRuangByProfile+'?kdprofile='+kdprofile, ctrl);
//}


// main function
function _sd(url,ctrl)
{
	var isReadOnly=document.getElementById(ctrl).getAttribute("readOnly");
	var isDisabled=document.getElementById(ctrl).getAttribute("disabled");
	if (isReadOnly==true||isDisabled==true)
	{
		alert('Cannot currently modify this field, it is read-only.');
		window.event.returnValue=false;
	}
	else
	{
		var retval=window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
		if(retval!=null)
		{
			try{
					document.getElementById(ctrl).value=retval[0];
					return retval;
				}
			catch(e){
						window.event.returnValue=false;
					}
		}
		else
		{
			window.event.returnValue=false;
		}
	}
}