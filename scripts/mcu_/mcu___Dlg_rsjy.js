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
// D I A L O G   F U N C T I O N  // Ver: 2.0
//-----------------------------------------------------
// The following functions are used to show the 
// look-up screen.
//=====================================================

// DOKTER
function showDialogDokter(ctrl)
{
	_sd(urlbDokter, ctrl);
}

// look up screen for Pelayanan
function showDialogTarifPelayanan(ctrl)
{
	_sd(urlbTarifPelayanan, ctrl);
} 

// look up screen for Pelayanan
function showDialogTarifPelayananRJ(ctrl)
{
	_sd(urlbTarifPelayananRJ, ctrl);
} 

// look up screen for Pelayanan
function showDialogTarifPelayananPM(ctrl)
{
	_sd(urlbTarifPelayananPM, ctrl);
} 

// look up screen for Pelayanan
function showDialogTarifPelayananLB(ctrl)
{
	_sd(urlbTarifPelayananLB, ctrl);
}

// look up screen for Job Order MCU
function showDialogJobOrderMCU(ctrl)
{
	_sd(urlbJobOrderMCU, ctrl);
}

// look up screen for Registrasi pasien MCU
function showDialogRegistrasiMCU(ctrl)
{
	_sd(urlbregistrasimcu, ctrl);
}

// look up screen for Paket MCU
function showDialogPaketMCU(ctrl)
{
	_sd(urlbpaketmcu, ctrl);
}

// look up screen for Registrasi Hasil MCU
function ShowDialogRegistrasiHasilMCU(ctrl)
{
	_sd(urlbregistrasihasilmcu, ctrl);
}

// look up screen for Hasil MCU
function ShowDialogHasilMCU(ctrl)
{
	_sd(urlbhasilmcu, ctrl);
}

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