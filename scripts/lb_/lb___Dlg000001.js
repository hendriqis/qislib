// *********************************************************************************
// *                                                                               *
// *    (c) Copyright 1997-2002 QPro Sukses Mandiri, Pt.  All rights reserved.     *
// *    This material is proprietary to QPro Sukses Mandiri, PT. and may not be    *
// *    used, distributed or reproduced in any form or by an means without         *
// *    written expression from QPro Sukses Mandiri, Pt.  Any use, distribution    *
// *    or reproduction in any form or by any means without written permission     *
// *    QPro Sukses Mandiri, Pt. is a violation of federal copyright laws     	   *
// *    and international treaties.  Terms of use.                                 *
// *                                                                               *
// *********************************************************************************

//=====================================================
// D I A L O G   F U N C T I O N
//-----------------------------------------------------
// The following functions are used to show the 
// look-up screen.
//=====================================================


// look up screen for table fraction
function ShowDialogFraction(ctrl)
{
	_sd(urlbfraction, ctrl);
}

// table test
function ShowDialogTest(ctrl)
{
	_sd(urlbtest, ctrl);
}

// table farmasi
function showDialogFarmasi(ctrl)
{
	_sd(urlbfarmasi, ctrl);
}


// table patient
function ShowDialogPatient(ctrl)
{
	_sd(urlbpatient, ctrl);
}

// sample
function ShowDialogSample(ctrl)
{
	_sd(urlbsample, ctrl);
}

// worklist type
function ShowDialogWlType(ctrl)
{
	_sd(urlbworklisttype, ctrl);
}

// worklist
function ShowDialogWorklist(ctrl)
{
		_sd(urlbworklist, ctrl);
}

function showDialogkdanalyzer(ctrl)
{
		_sd(urlbkdanalyzer, ctrl);
}

// main function
function _sd(url,ctrl)
{
	var retval=window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	// if(retval!="" && retval!=null)
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