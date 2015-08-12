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
function showDialogRegistrasiRiWithBatal(ctrl)
{
	_sd(urlbRegistrasiriwithbatal, ctrl);
}

// aktiva
function showDialogkdaktiva(ctrl)
{
	_sd(urlbaktiva, ctrl);
}

// main function

// look up screen for Jenis Diagnosa
function ShowDialogJenisDiagnosa(ctrl)
{
	_sd(urlbJenisDiagnosa, ctrl);
}


// look up screen for Matrix Diagnosa - Poliklinik
function ShowDialogMtxDiagPoli(ctrl,sid)
{
	_sd(urlbmtxdiagpoli+'?kds='+sid,ctrl);
}

//Look up screen for morfologi 
function ShowDialogMorfologi(ctrl)
{
	_sd(urlbmorfologi, ctrl);
}
// look up screen for rekam medis To RI
function showDialogRekamMedis(ctrl)
{
	_sd(urlbRekamMedis, ctrl);
}
// look up screen for Master Medis
function ShowDialogMedis(ctrl)
{
	_sd(urlbmedis, ctrl);
}

// look up screen for registrasi tanpa batal
function showDialogRegistrasiWithOutBatal(ctrl)
{
	_sd(urlbRegistrasiwithoutbatal, ctrl);
}


function ShowDialogTindakan(ctrl)
{
	_sd(urlbTindakan, ctrl);
}


function ShowDialogDokterAns(ctrl)
{
	_sd(urlbdokterans, ctrl);
}

// look up screen for Keadaan keluar
function ShowDialogKdnKeluar(ctrl)
{
	_sd(urlbkdnkeluar, ctrl);
}

// look up screen for Cara Keluar
function ShowDialogCaraKeluar(ctrl)
{
	_sd(urlbcarakeluar, ctrl);
}

// look up screen for Tindak Lanjut
function ShowDialogTdkLanjut(ctrl)
{
	_sd(urlbtdklanjut, ctrl);
}
// look up screen for Pasien - Aktif
function ShowDialogPasienAktif(ctrl)
{
	_sd(urlbpasienaktif, ctrl);
}

function ShowDialogRegPerNorm(ctrl,sid)
{
	_sd(urlbregpernorm+'?kds='+sid,ctrl);
}
function ShowDialogRegPerNormRI(ctrl,sid)
{
	_sd(urlbregpernormri+'?kds='+sid,ctrl);
}
//look up screen for No Reg berdasarkan Norm
function ShowDialogRegPerNormrd(ctrl,sid)
{
	_sd(urlbregpernormrd+'?kds='+sid,ctrl);
}
//show dialog for diagnosa & tindakan
function ShowDialogTransHDPerNoreg(ctrl,sid)
{
	_sd(urlbtranshdpernoreg+'?kds='+sid,ctrl);
}
// Diagnosa RI
function showDialogDiagnosa(ctrl)
{
	_sd(urlbDiagnosa, ctrl);
}

// look up screen for Master Poliklinik
function ShowDialogPoliklinikTracking(ctrl)
{
	_sd(urlbpolikliniktracking, ctrl);
}

function ShowDialogRuangTracking(ctrl)
{
	_sd(urlbRuangtracking, ctrl);
}
// look-up screen.... registrasi by kdtype and norm 
function showDialogRegistrasi(ctrl,norm,kdtype)
{
	_sd(urlbREGByNormNType+'?norm='+norm+'&kdtype='+kdtype, ctrl);
}

// look-up screen.... no transaksi by Noreg,Norm,kdtype,status
function ShowDialogNoTransaksiRM(ctrl,noreg,norm,kdtype,kdstatus)
{
	_sd(urlbTrMedRecBYREGNORMTYPENSTATUS+'?noreg='+noreg+'&norm='+norm+'&kdtype='+kdtype+'&kdstatus='+kdstatus, ctrl);
}

// look up screen for Penunjang Medis
function ShowDialogPnjMedisTracking(ctrl)
{
	_sd(urlbpnjmedistracking, ctrl);
}	

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

function _sdFromGrid(url, ctrl)
{
	var retval =
		window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	if(retval!=null)
	{
		try{
			ctrl.value = retval[0];
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
