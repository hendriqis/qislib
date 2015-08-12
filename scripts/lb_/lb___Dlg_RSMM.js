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

function showDialogPrm(ctrl)
{
	_sd(urlbprm, ctrl);
}

function ShowDialogPaket(ctrl)
{
	_sd(urlbpaket, ctrl);
}

function ShowDialogFraction(ctrl)
{
	_sd(urlbfraction, ctrl);
}

function ShowDialogOptional(ctrl,chk)
{
	//alert(chk);
	if (chk==true) 
		{
		_sd(urlbfractiononly, ctrl)
		}
	else
		{
		_sd(urlbmastertest, ctrl);
		}
	//_sd(urlbfraction, ctrl);
}

// table test
function ShowDialogTest(ctrl)
{
	_sd(urlbtest, ctrl);
}

// table test
function ShowDialogMasterTest(ctrl)
{
	_sd(urlbmastertest, ctrl);
}

// master fraction
function ShowDialogFractionOnly(ctrl)
{
	_sd(urlbfractiononly, ctrl);
}

function ShowDialogPerusahaan(ctrl)
{
	_sd(urlbperusahaan, ctrl);
}

function ShowDialogRujukan(ctrl)
{
	_sd(urlbrujukan, ctrl);
}

function ShowDialogRujukanAktif(ctrl)
{
	_sd(urlbrujukanakt, ctrl);
}

function ShowDialogCoverage(ctrl)
{
	_sd(urlbcoverage, ctrl);
}

function showDialogkdanalyzer(ctrl)
{
		_sd(urlbkdanalyzer, ctrl);
}

//Obat
function showDialogObat(ctrl,kdr)
{
	_sd(urlbObat+'?kdr='+kdr, ctrl);
}

//Kelompok
function showDialogKelompok(ctrl,kdg)
{
	_sd(urlbkelompok+'?kdg='+kdg, ctrl);
}

//Group
function ShowDialogGroup(ctrl)
{
	_sd(urlbgroup, ctrl);
}

//Instansi
function ShowDialogInstansi(ctrl)
{
	_sd(urlbinstansi, ctrl);
}

//Pengirim
function ShowDialogPengirim(ctrl,sid)
{
	_sd(urlbpengirim+'?kds='+sid,ctrl);
}

// look up screen for KelompokTarif
function showDialogKelompokTarif(ctrl)
{
	_sd(urlbKelompokTarif, ctrl);
} 

// look up screen for TarifPelayanan
function showDialogTarifPelayanan(ctrl)
{
	_sd(urlbTarifPelayanan, ctrl);
} 

// look up screen for Kelas
function showDialogKelas(ctrl)
{
	_sd(urlbKelas, ctrl);
} 

//Dokter
function ShowDialogDokter(ctrl)
{
	_sd(urlbdokter, ctrl);
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

//Instansi
function ShowDialogInstansi(ctrl)
{
	_sd(urlbinstansi, ctrl);
}

// table transaksi
function ShowDialogTransaksi(ctrl,jp)
{
	_sd(urlbtransaksi+'?jp='+jp, ctrl);
}

function ShowDialogTransaksiPosted(ctrl,jp)
{
	_sd(urlbtransaksiposted+'?jp='+jp, ctrl);
}

function ShowDialogTransaksiRI(ctrl,jp,noreg)
{
	_sd(urlbtransaksiri+'?jp='+jp+'&noreg='+noreg, ctrl);
}

function ShowDialogTransaksiUGD(ctrl,jp,noreg)
{
	_sd(urlbtransaksird+'?jp='+jp+'&noreg='+noreg, ctrl);
}

function ShowDialogTransaksiRIPosted(ctrl,jp,noreg)
{
	_sd(urlbtransaksiriposted+'?jp='+jp+'&noreg='+noreg, ctrl);
}

// table Registrasi RJ OutStanding 
function ShowDialogRegRJOS(ctrl)
{
	_sd(urlbregrjos, ctrl);
}

// table Registrasi RI OutStanding 
function ShowDialogRegRIOS(ctrl)
{
	_sd(urlbregrios, ctrl);
}

// table Registrasi RD OutStanding 
function ShowDialogRegRDOS(ctrl)
{
	_sd(urlbregrdos, ctrl);
}

// table Registrasi RJ 
function ShowDialogRegRJ(ctrl)
{
	_sd(urlbregrj, ctrl);
}

// table Registrasi RI 
function ShowDialogRegRI(ctrl)
{
	_sd(urlbregri, ctrl);
}


// table Registrasi RD
function ShowDialogRegRD(ctrl)
{
	_sd(urlbregrd, ctrl);
}

// look up screen for Master Poliklinik
function ShowDialogPoliklinik(ctrl)
{
	_sd(urlbpoliklinik, ctrl);
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

// per-cases function
function _sdRegRiNotClose(ctrl,jp)
{
	var url;
	
	//alert(jp);
	if(jp=='01')//Pasien Rawat Inap
		{
		url = urlbregrios;
		}
	else if(jp=='05')//Pasien UGD
		{
		url = urlbregrdos
		}
	else
		{
		url = urlbregrjos;
		}
	
	var retval =
		window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	if(retval!=null)
	{
		try{
			//alert(typeof(ctrl));
			ctrl.value = retval[1] + " [" + retval[0] + "]";
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

function _sdRegRiNotCloseTxt(ctrl,ctrl2,jp)
{
	var url;
	
	//alert(jp);
	if(jp=='01')//Pasien Rawat Inap
		{
		url = urlbregri;
		}
	else if(jp=='05')//Pasien UGD
		{
		url = urlbregrd;
		}
	else
		{
		url = urlbregrj;
		}
	
	var retval =
		window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	if(retval!=null)
	{
		try{
			//alert(typeof(ctrl));
			document.getElementById(ctrl).value = retval[0]
			document.getElementById(ctrl2).value = retval[1] 
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
function _sdDokterPE(ctrl)
{
	var retval =
		window.showModalDialog(urlbdokter,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	if(retval!=null)
	{
		try{
			ctrl.value = retval[1] + " [" + retval[0] + "]";
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